# DEPLOYMENT GUIDE

## Pre-requisite

1. Install [Terraform](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwit3PK2yZLfAhVMqo8KHS6vA58QFjAAegQIARAC&url=https%3A%2F%2Fwww.terraform.io%2F&usg=AOvVaw30PLldI-lejCShkXrfBuCy)
2. Have an AWS account with the profile named **terraform**

## Uploading content to S3

Replace any `yarn` command with `npm` if you are using npm

1. `yarn build`
2. `aws s3 build s3://astro-tap-portal`
