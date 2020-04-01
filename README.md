# CarInfoApp

## About

Displays a list of cars with information like registration and fuel level. You can change car registrations and show a car's last position on a map.

## Try It Out
You can try out a hosted build of the CarInfoApp [here](https://master.d3b1etoqybssyl.amplifyapp.com/).

## Setup
required NPM, Node >10
### Get Repo
```
git clone https://github.com/bkellerm/car-info-app.git
cd car-info-app
```
### Install Angular and Amplify
```
npm install -g @angular/cli
npm install -g @aws-amplify/cli
```
### Setup Amplify
```
amplify init
```
```
Do you want to use an existing environment? (Y/n) Y
Choose the environment you would like to use: (Use arrow keys)
❯ dev 
# ....
```
updates and start backend
```
amplify push
```
```
Are you sure you want to continue? (Y/n) Y
Do you want to update code for your updated GraphQL API (Y/n) Y
Do you want to update code for your updated GraphQL API (Y/n) n
```
### Start Angular App
```
ng serve --open
```

## About the Implementation
- @angular/google-maps: for interactive map
- @angular/material: header, table
- AWS Amplify
    - Lambda function: reset DynamoDB CarInfoTable and add data fron data.json
    - AppSync GraphQL: to get list of car infos, update registration, listen for updates on registration
    - Amazon S3 and CloudFront: host angular app
