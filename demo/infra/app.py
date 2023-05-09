#!/usr/bin/env python3
import os

import aws_cdk as cdk

from stacks.demo_stack import DemoStack


app = cdk.App()
DemoStack(app, "aug-cdk-pd")

app.synth()
