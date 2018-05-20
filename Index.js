console.log("Intern")

var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   //response.json({ fulfillmentText: 'This is a sample response from your webhook!' });
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

module.exports.helloHttp = function helloHttp (request, response) {
  response.json({ fulfillmentText: 'This is a sample response from your webhook!' });
};