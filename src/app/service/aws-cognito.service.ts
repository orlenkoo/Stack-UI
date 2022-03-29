import { Injectable } from '@angular/core';
import { CognitoIdentityServiceProvider, config, } from 'aws-sdk';
import { createHmac } from 'crypto';
import { User } from '../model/user.model';
import envConfig from '../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class AwsCognitoService {

  // Configs to be added to a separate config file in future
  // @ts-ignore
  private clientId: string = envConfig?.cognito?.clientId;
  // @ts-ignore
  private clientSecret = envConfig?.cognito?.secret;
  private readonly paramsMap: { [key: string]: keyof User } = {
    'custom:businessName': 'businessName',
    'custom:businessType': 'industryName',
    'custom:shopifyURL': 'shopifyURL',
    'email': 'emailId',
    'phone_number': 'contactPhoneNumber',
    'family_name': 'lastName',
    'given_name': 'firstName',
    'website': 'shopifyURL'
  }

  // Service variables
  private cognito: CognitoIdentityServiceProvider;

  constructor() {
    config.update({
      region: 'ap-southeast-2'
    });
    this.cognito = new CognitoIdentityServiceProvider({
      apiVersion: '2016-04-18'
    });
  }

  userSignup(user: User): Promise<CognitoIdentityServiceProvider.SignUpResponse> {
    return new Promise((resolve, reject) => {
      this.cognito.signUp(this.createSignupParams(user), (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  userConfirm(emailId: string, code: string) {
    return new Promise((resolve, reject) => {
      this.cognito.confirmSignUp(this.createConfirmationParams(emailId, code), (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  private createHash(emailId: string) {
    return createHmac('SHA256', this.clientSecret).update(emailId + this.clientId).digest('base64');
  }

  private createUserAttributes(user: User) {
    return Object.keys(this.paramsMap).map(key => {
      return {
        Name: key,
        Value: user[this.paramsMap[key]]
      }
    });
  }

  private createSignupParams(user: User): CognitoIdentityServiceProvider.SignUpRequest {
    return {
      ClientId: this.clientId,
      Password: <string>user.secret,
      Username: <string>user.emailId,
      SecretHash: this.createHash(<string>user.emailId),
      UserAttributes: this.createUserAttributes(user)
    }
  }

  private createConfirmationParams(emailId: string, code: string): CognitoIdentityServiceProvider.ConfirmSignUpRequest {
    return {
      ClientId: this.clientId,
      Username: emailId,
      SecretHash: this.createHash(emailId),
      ConfirmationCode: code
    }
  }
}
