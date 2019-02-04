// Import the express javascript library
var express = require('express');

const { byName, byYear } = require('us-baby-names');

const formatToHTML = function(dataArr) {
  // If dataArr is undefined or null, make an empty array
  if (!dataArr) {
    dataArr = [];
  }
  // Use the Array.map function to convert each record 
  // into an HTML table element.
  dataArr = dataArr.map(item => {
    // Create the HTML here
    let html = '<tr>';
    html += (item.year) ? '<td>'+item.year+'</td>' : '';
    html += (item.name) ? '<td>'+item.name+'</td>' : '';
    html += (item.sex) ? '<td>'+item.sex+'</td>' : '';
    html += (item.count) ? '<td>'+item.count+'</td>' : '';
    html += '</tr>';
    return html;
  });
  // Now join all the elements together inside the 
  // <table><tbody> elements.
  return '<table><tbody>'+
    dataArr.join('')+'</tbody></table>';
};
// Transform name with first character capitalized and the 
// rest lower case
const fixName = function(name) {
  let newName = name.toLowerCase();
  newName = newName.charAt(0).toUpperCase() +
    newName.substr(1);
  return newName;
};



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

// Set up the server to 'listen' to requests on port 8080
// Requests to virtual machines running on Cloud 9 will use
// port 8080 by default.  You can force a URL request to a
// specific port by adding :nnnn to the end of the URL
app.listen(PORT, function () {
  // This function executes when a request is heard from the client
  console.log('Example app listening on port ' + PORT + '!');
});
