let baseUrl = process.env.NODE_ENV !== 'production' ? '/api' : 'http://**.**.**.**:10086/api/';
module.exports = {
    allNews: baseUrl + 'webapp/webnewlist/'
}