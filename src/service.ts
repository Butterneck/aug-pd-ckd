import { Duration, Stack } from 'aws-cdk-lib';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as ddb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface ServiceProps {
  readonly codeDirectory: string;
  readonly tableProps?: ddb.TableProps;
}

export class Service extends Construct {

  public function: lambda.Function;
  public table?: ddb.Table;
  public restApi: apigw.LambdaRestApi;

  constructor(scope: Stack, id: string, props: ServiceProps) {
    super(scope, id);

    // 👇 create lambda function
    this.function = new lambda.DockerImageFunction(this, 'Function', {
      code: lambda.DockerImageCode.fromImageAsset(props.codeDirectory),
      memorySize: 512,
    });

    // 👇 define a metric for lambda errors
    const functionErrors = this.function.metricErrors({
      period: Duration.minutes(1),
    });

    // 👇 create an Alarm for lambda errors
    functionErrors.createAlarm(this, 'LambdaErrorsAlarm', {
      threshold: 1,
      evaluationPeriods: 1,
      alarmDescription:
      'Alarm if the SUM of Errors is greater than or equal to the threshold (1) for 1 evaluation period',
    });

    // 👇 conditionally create dynamodb table
    if (props.tableProps) {
      this.table = new ddb.Table(this, 'Table', props.tableProps);
      this.table.grantReadWriteData(this.function); // automatic IAM permissions
    }

    // 👇 create rest api endpoint
    this.restApi = new apigw.LambdaRestApi(this, 'RestApi', {
      handler: this.function,
    });
  }
}