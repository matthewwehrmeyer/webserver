// Import the express javascript library
var express = require('express');

// Instantiate a server
var app = express();

// Set the port number to be compatible with Cloud 9
const PORT = 8080;

// Respond with "hello world" when a GET request is made
app.get('/', function (req, res) {
  // Send the text back to the client in response to the request
  res.send('Hello world -- My server is working!!!');
  // Log a message to the terminal window
  console.log((new Date()).toString()+' Message served to the client');
});
app.get('*', function (req, res) {
  res.send('This part runs if no other paths catch it');
})

app.get('/dog', function (req, res) {
  res.send('This is the dog route');
});


// Set up the server to 'listen' to requests on port 8080
// Requests to virtual machines running on Cloud 9 will use
// port 8080 by default.  You can force a URL request to a
// specific port by adding :nnnn to the end of the URL
app.listen(PORT, function () {
  // This function executes when a request is heard from the client
  console.log('Example app listening on port ' + PORT + '!');
});
