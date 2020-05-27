const express = require('express');
const app = express();
const http = require('http');
var server = http.Server(app);
var io =  module.exports.io = require('socket.io')(server);

const SocketManager = require('./SocketManager');

const PORT = process.env.port || 3231;

app.use(express.static(__dirname + '/../../build'))

io.on('connection', SocketManager);

server.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
