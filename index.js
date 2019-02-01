// Import the express javascript library
var express = require('express');

// Instantiate a server
var app = express();

// Set the port number to be compatible with Cloud 9
const PORT = 8080;
app.use(function (req, res, next) {
  console.log('Additional processing is done here');
  req.timestamp = new Date().toString();
  next();
});

// Respond with "hello world" when a GET request is made
app.get('/', function (req, res) {
  // Send the text back to the client in response to the request
  res.append('Content-Type', 'text/html');
  res.send('<html><head></head><body>'+
    '<h1>Hello World!</h1>'+
    '<h3>My server is working!!!</h3>'+
    '<h5>'+req.timestamp+'</h5></body></html>');

});
app.get('/dog/:breed', function (req, res) {
  res.send('This is the dog route and the breed was: '+req.params.breed);
});
app.get('*', function (req, res) {
  res.send('This part runs if no other paths catch it');
});

// Set up the server to 'listen' to requests on port 8080
// Requests to virtual machines running on Cloud 9 will use
// port 8080 by default.  You can force a URL request to a
// specific port by adding :nnnn to the end of the URL
app.listen(PORT, function () {
  // This function executes when a request is heard from the client
  console.log('Example app listening on port ' + PORT + '!');
});
