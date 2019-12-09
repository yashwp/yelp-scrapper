const request = require('request-promise');
const AWS = require('aws-sdk');

const list = [
    'wei-guo-house-san-francisco',
    'amausaan-uji-matcha-san-francisco-3',
    'little-sweet-san-francisco-12'
];

function deployScraper(businessName) {
  const lambda = new AWS.Lambda({
    region: 'ap-south-1'
  });
  
  const params = {
    FunctionName: 'yelp-scraper-dev-scrape',
    InvocationType: 'RequestResponse',
    LogType: 'Tail',
    Payload: JSON.stringify(businessName)
  };
  
  return lambda.invoke(params, (err, data) => {
    if (err) {
      return `Error in scraping ${JSON.stringify(err)}`
    } else if (data) {
      return JSON.stringify(data)
    }
  });
}

function swarm(arr) {
  arr.forEach(i => deployScraper(i))
}

swarm(list);
