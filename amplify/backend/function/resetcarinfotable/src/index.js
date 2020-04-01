/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiCarinfoapiCarTableName = process.env.API_CARINFOAPI_CARTABLE_NAME
var apiCarinfoapiCarTableArn = process.env.API_CARINFOAPI_CARTABLE_ARN
var apiCarinfoapiGraphQLAPIIdOutput = process.env.API_CARINFOAPI_GRAPHQLAPIIDOUTPUT

Amplify Params - DO NOT EDIT */


const AWS = require('aws-sdk');
const uuid = require('uuid/v4');
const fs = require('fs');
var path = require('path');
const region = process.env.REGION;
const CARINFO_CARTABLE_ARN = process.env.API_CARINFO_CARTABLE_ARN;
const ddb_table_name = process.env.API_CARINFOAPI_CARTABLE_NAME
const docClient = new AWS.DynamoDB.DocumentClient({region});

/**
 *  Deletes all CarTable records and inserts records from ./data.json
 */
exports.handler = function (_, _, callback) {
    // extract table name
    // const tmp = CARINFO_CARTABLE_ARN.split('/')
    // const table_name = tmp[tmp.length - 1]

    // remove all records
    removeRecords(ddb_table_name).then(_ => {
        const filePath = path.join(process.cwd(),'data.json')
        const rawData = fs.readFileSync(filePath)
        const data = JSON.parse(rawData)

        writeCarInfoJsonToDB(data, ddb_table_name)
        .then(x => {callback(null)})
        .catch(err => {callback(null, null)})
    })
};


function writeCarInfoJsonToDB(json, table) {
  // convert to CarTable formate
  const puts = json.map(x => (
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
  // add items to CarTable
  let params = { RequestItems: {} }
  params.RequestItems[table] = puts

  return new Promise(function(resolve, reject) {
    docClient.batchWrite(params, (err, data) => {
      if (err) {
          console.log('batchWrite error', err)
          reject(err);
      } else {
          resolve(data);
      }
    });
  });
}

// based one: https://stackoverflow.com/questions/51110377/delete-all-items-in-dynamodb-using-lambda
function removeRecords(table) {
  console.log('removeRecords')
  // read as many ids as possible (4KB limit) and then delete

  return new Promise((resolve, reject) => {
    getRecords(table).then((records) => {
        console.log('records', records);
        let hasError = false;
        records.forEach(record => {
          deleteRecord(record, table)
            .then(() => {})
            .catch(err=>{
              console.log('could not delete this record', record,  err);
              hasErrorhasError = true;
            });
        });
        resolve();
        // repeat until no more
        // if (!hasError) {
        //   removeRecords(table);
        // }
      }).catch(err => {
        console.log('remove records failed', err)
        reject(err);
      });
  });
  
}
 
function getRecords(table) {
  const testParams = {
    ProjectionExpression: 'id',
    TableName: table
  };
  return new Promise((resolve, reject) => 
    docClient.scan(testParams, (err, records) => {
      if (err) {
        reject(err);
      } else {
        // formate: [{id: 12}, {id:32}, ...]
        resolve(records.Items);
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
        console.log('failed to delete item with key: ', id)
        reject(err);
      } else {
        resolve();
      }
    });
  });
}