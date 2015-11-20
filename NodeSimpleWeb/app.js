var http = require('http');
var server = http.createServer(function (req, res) {  
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello Node\n');
}).listen(3000);
console.log('Server running at http://0.0.0.0:3000/'); 
