/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiCarinfoCarTableName = process.env.API_CARINFO_CARTABLE_NAME
var apiCarinfoCarTableArn = process.env.API_CARINFO_CARTABLE_ARN
var apiCarinfoGraphQLAPIIdOutput = process.env.API_CARINFO_GRAPHQLAPIIDOUTPUT
Amplify Params - DO NOT EDIT */


const AWS = require('aws-sdk')
const uuid = require('uuid/v4')
const region = process.env.REGION
const CARINFO_CARTABLE_ARN = process.env.API_CARINFO_CARTABLE_ARN
const docClient = new AWS.DynamoDB.DocumentClient({region})

const json = [
    {
      "location": {
        "latittude": 47.3799174,
        "longitude": 8.5367373
      },
      "registration": "ZH-123 456",
      "mlieage": 4356.5,
      "fuel": {
        "level": 80,
        "litters": 38
      },
      "bat": "GOOD"
    },
    {
      "location": {
        "latittude": 47.3753548,
        "longitude": 8.545299
      },
      "registration": "ZH-453 456",
      "mlieage": 97306.5,
      "fuel": {
        "level": 100,
        "litters": 45
      },
      "bat": "GOOD"
    },
    {
      "location": {
        "latittude": 47.360204,
        "longitude": 8.5334757
      },
      "registration": "ZH-166 98",
      "mlieage": 12256.5,
      "fuel": {
        "level": null,
        "litters": 33.5
      },
      "bat": "GOOD"
    },
    {
      "location": {
        "latittude": 47.3929301,
        "longitude": 8.5486769
      },
      "registration": "ZH-13 46",
      "mlieage": 45566.5,
      "fuel": {
        "level": 10,
        "litters": 8
      },
      "bat": "GOOD"
    }
]

exports.handler = function (event, _, callback) {
    // extract table name
    const tmp = CARINFO_CARTABLE_ARN.split('/')
    const table_name = tmp[tmp.length - 1]

    // get all table item ids
    const testParams = {
        ProjectionExpression: 'id',
        ScanFilter: 'true',
        KeyConditions: {},
        TableName: table_name 
    }
    docClient.query(testParams, (err, data) => {
        if (err) {
          console.log(err, 'error deleting')
        } else {
          console.log('items')
          console.log(data.Items.toString())
        }
    })


    // TODO: readin JSON from S3

    // convert to CarTable formate
    const items = json.map(x => (
        {
            PutRequest: {
                Item: {
                    id: uuid(),
                    registration: x.registration,
                    mileage: x.mlieage,
                    fuel_level: x.fuel.level,
                    fuel_liters: x.fuel.litters,
                    battery_status: x.bat,
                    last_location_longitude: x.location.longitude,
                    last_location_latitude: x.location.latittude
                }
            }
        }
    ))

    // Add items to CarTable
    let params = { RequestItems: {} }
    params.RequestItems[table_name] = items
    docClient.batchWrite(params, (err, data) => {
        if (err) {
            callback(err)
        } else {
            let response = null
            callback(null, response)
        }
    })
}