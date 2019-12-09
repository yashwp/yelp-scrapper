'use strict';
const {getPage, parsePage, saveRatings, deployScraper} = require('./utils/index');

module.exports.scrape = async event => {
  try {
    const data = await getPage(event);
    const obj = await parsePage(data);
    await saveRatings(obj, event);
    
    return {
      statusCode: 200,
      message: `Scraping done successfully for ${event}`
    };
  } catch (e) {
    return {
      error: `Scraping failed: ${JSON.stringify(e)}`
    };
  }
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.launch_scraper = (event) => {
  const listFromDb = [
    'wei-guo-house-san-francisco',
    'amausaan-uji-matcha-san-francisco-3',
    'little-sweet-san-francisco-12'
  ];
  
  listFromDb.forEach(i => deployScraper(i));
};
