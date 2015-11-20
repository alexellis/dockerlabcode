var http = require('http');
var port = 3000;

var logHit=function(req, res, ms) {
	var addr=req.connection.remoteAddress;
	addr=addr.substring(addr.lastIndexOf(':')+1);
	console.log(req.method + " " + req.url + " "+res.statusCode +" "+ms+ " ms" + (addr!="1" ? " - "+addr : "") );
};

var server = http.createServer(function (req, res) {  
	var start = new Date().getTime();
	
	var code = 200;
	res.writeHead(code, {'Content-Type': 'text/plain'});
	res.end('Hello Node\n');
	
	var end = new Date().getTime();
	var ms = end-start;
	logHit(req,res,ms);
}).listen(port);
console.log('Server running at http://0.0.0.0:'+port+'/'); 
