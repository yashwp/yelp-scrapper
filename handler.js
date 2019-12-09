'use strict';
const {getPage, parsePage, saveRatings} = require('./utils/index');

module.exports.scrape = async event => {
  
  const data = await getPage(event);
  const obj = await parsePage(data);
  await saveRatings(obj, event);
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
