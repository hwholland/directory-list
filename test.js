var request = require('request');
var path = require('path');
request('http://localhost:8081/v1/filesystem/' + __dirname, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});