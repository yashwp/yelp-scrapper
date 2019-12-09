const cheerio = require('cheerio');

module.exports = page => {
  try {
    const $ = cheerio.load(page);
    const rating = $('.lemon--div__373c0__1mboc.i-stars__373c0__Y2F3O').attr('aria-label').trim().split(' ')[0];
    const reviewCount = $('.lemon--p__373c0__3Qnnj.text__373c0__2pB8f.text-color--mid__373c0__3G312').text().trim().split(' ')[0];
    return Promise.resolve({rating, reviewCount});
  }catch (e) {
    return Promise.reject(`Error parsing page ${JSON.stringify(e)}`)
  }
};
