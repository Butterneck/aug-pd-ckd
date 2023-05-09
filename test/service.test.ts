import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as ddb from 'aws-cdk-lib/aws-dynamodb';
import * as augPdCdk from '../src/index';

function randomId() {
  return `id-${(Math.random() + 1).toString(36).substring(7)}`;
}

let mockApp: App;

beforeAll(() => {
  mockApp = new App();
});

describe('Service Construct', () => {
  let template: Template;
  let stack: Stack;

  beforeAll(() => {
    stack = new Stack(mockApp, randomId(), {
      env: { account: '0123456789', region: 'eu-west-1' },
    });

    new augPdCdk.Service(stack, randomId(), {
      codeDirectory: 'test/src',
      tableProps: {
        partitionKey: { name: 'id', type: ddb.AttributeType.STRING },
      },
    });

    template = Template.fromStack(stack);
  });

  test('Lambda function should be created', () => {
    template.hasResourceProperties('AWS::Lambda::Function', {});
  });

  test('Lambda function should have memory set correcly', () => {
    template.hasResourceProperties('AWS::Lambda::Function', {
      MemorySize: 512,
    });
  });

  test('Lambda function should be invokable by aws `apigateway` service', () => {
    template.hasResourceProperties('AWS::Lambda::Permission', {
      Action: 'lambda:InvokeFunction',
      Principal: 'apigateway.amazonaws.com',
    });
  });

  test('Just one dynamodb table should be created', () => {
    template.resourceCountIs('AWS::DynamoDB::Table', 1);
  });
});