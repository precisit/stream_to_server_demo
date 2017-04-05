var http = require('http')
var websocket = require('websocket-stream')


var echo = function(stream) {
	console.log('Hej');
//	stream.pipe(stream);
	stream.pipe(process.stdout);
}

var server = http.createServer();
websocket.createServer({server: server}, echo);
server.listen(8001);

