const AWS = require('aws-sdk');

module.exports.deployScraper = (businessName) => {
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
      return `Error in scraping ${JSON.stringify(err)}`;
    } else if (data) {
      return JSON.stringify(data);
    }
  });
}
;
