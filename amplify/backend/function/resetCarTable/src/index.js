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

    // remove all records
    removeRecords(table_name)

    // TODO: readin JSON from S3

    writeCarInfoJsonToDB(json)
};


function writeCarInfoJsonToDB(json) {
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
  let params = { RequestItems: {} };
  params.RequestItems[table_name] = items;
  docClient.batchWrite(params, (err, data) => {
      if (err) {
          // TODO: fail immediatly?
          callback(err);
      } else {
          let response = null;
          callback(null, response);
      }
  });
}

// based one: https://stackoverflow.com/questions/51110377/delete-all-items-in-dynamodb-using-lambda
function removeRecords(table) {
  console.log('removeRecords')
  // read as many ids as possible (4KB limit) and then delete
  getRecords(table).then((records) => {
    console.log('records', records);
    records.forEach(record => {
      deleteRecord(record, table)
        .then(() => {})
        .catch(err=>{console.log('could not delete this record', record,  err)});
    });
  }).catch(err => {
    console.log('catch after forEach', err)
  });

  // // repeat until no more records
  // removeRecords(table);
}
 
function getRecords(table) {
  const testParams = {
    ProjectionExpression: 'id',
    TableName: table s
  };
  return new Promise((resolve, reject) => 
    docClient.scan(testParams, (err, records) => {
      if (err) {
        reject(err);
      } else {
        // formate: [{id: 12}, {id:32}, ...]
        resolve(records.Items)
      }
    })
  );
};

function deleteRecord(id, table) {
  const params = {
    TableName: table,
    Key: id
  };
  return new Promise(function(resolve, reject) {
    docClient.delete(params, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}