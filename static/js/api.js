let baseUrl = process.env.NODE_ENV !== 'production' ? '/api' : 'http://47.96.94.66:10086/api/';
module.exports = {
    allNews: baseUrl + 'webapp/webnewlist/'
}