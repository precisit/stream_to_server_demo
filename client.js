var websocket = require('websocket-stream');
var ws = websocket('ws://localhost:8001');
var getUserMedia = require('get-user-media-promise');
var MicrophoneStream = require('microphone-stream');

getUserMedia({ video: false, audio: true })
  .then(function(stream) {
    var micStream = new MicrophoneStream(stream);
  
    // or pipe it to another stream 
    micStream.pipe(ws);

    micStream.on('data', function(chunk) {
    	//console.log('hej', chunk.data);
    })
 
    // It also emits a format event with various details (frequency, channels, etc) 
    micStream.on('format', function(format) {
    	console.log('hej');
		console.log(format);
    });

    micStream.on('close', function() {
    	console.log('CLOSED');
    })

   }).catch(function(error) {
    console.log(error);
  });
