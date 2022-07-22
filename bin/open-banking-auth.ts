#!/usr/bin/env node
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import * as cdk from 'aws-cdk-lib';
import { OpenBankingAuthStack } from '../lib/open-banking-auth-stack';

const app = new cdk.App();
new OpenBankingAuthStack(app, 'OpenBankingAuthStack', { 
    env: { 
      account: process.env.CDK_DEFAULT_ACCOUNT, 
      region: process.env.CDK_DEFAULT_REGION 
  }});