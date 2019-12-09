const uuid = require('uuid');
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient;
module.exports = (obj, businessName) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      businessName,
      scrapedAt: JSON.stringify(new Date()),
      rating: obj.rating,
      reviewCount: obj.reviewCount
    }
  };
  
  db.put(params, err => {
    if (err) {
      console.error(`Error in adding data ${JSON.stringify(err)}`);
      return Promise.reject();
    }
    
    return Promise.resolve(params.Item);
  });
};
