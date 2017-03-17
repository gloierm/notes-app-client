export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: 'notes-app-uploads-mg',
    DOMAIN: 'https://s3.amazonaws.com'
  },
  apiGateway: {
    URL: 'https://ru6r640mxa.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID : 'us-east-1_Fvyg3vAGm',
    APP_CLIENT_ID : '6ubnthecuqaslsjvj71d29o5ui',
    IDENTITY_POOL_ID: 'us-east-1:f8a14cab-caa0-4f49-b7e3-d7c56db7ba01',
  }
};
