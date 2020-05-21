const express = require('express');
const app = express();
const http = require('http');
var server = http.Server(app);
var io =  module.exports.io = require('socket.io')(server);

const SocketManager = require('./SocketManager');

const PORT = process.env.port || 3231;

io.on('connection', SocketManager);

server.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

// module.exports = io;
// var app = require('http').createServer()
// var io = module.exports.io = require('socket.io')(app);

// const PORT = process.env.PORT || 3231
// const SocketManager = require('./SocketManager')
 
// io.on('connection', SocketManager);


// app.listen(PORT, function(){
//   console.log('listening on *:' + PORT);
// });
