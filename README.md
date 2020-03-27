## Deploy the app

1. Build the app
   `yarn build`
2. Deploy
   `aws s3 sync build/ s3://crowdstar-client`
