// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
require('dotenv').config()
import {KeyCloak, KeyCloakProps, KeycloakVersion} from './keycloak';
import {aws_route53 as route53, aws_route53_targets as route53targets} from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class OpenBankingAuthStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const certificateArn = this.node.tryGetContext('ACM_CERT_ARN') ?? process.env.ACM_CERT_ARN;

    const mykeycloakprops: KeyCloakProps = { auroraServerless: true, certificateArn, keycloakVersion: KeycloakVersion.V15_0_2};
    if (!certificateArn) {
      throw new Error('ERROR - ACM_CERT_ARN not found');
    }
    new KeyCloak(this, 'KeyCloak', mykeycloakprops);

  }
}