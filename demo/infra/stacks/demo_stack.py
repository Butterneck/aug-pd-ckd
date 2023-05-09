from aws_cdk import (
    Stack,
    aws_dynamodb as ddb
)
from constructs import Construct
from aug_pd_cdk import Service

class DemoStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        Service(self, "demoService",
                code_directory="../code",
                table_props=ddb.TableProps(
                    partition_key=ddb.Attribute(
                        name="id",
                        type=ddb.AttributeType.STRING,
                    )
                ),
        )
        
