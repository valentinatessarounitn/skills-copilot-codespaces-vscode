// create web server
var http = require('http');

// create server
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!');
});

// listen on port 3000
server.listen(3000, 'localhost', function () {
  console.log('Server is running on http://localhost:3000');
});