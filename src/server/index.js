const express = require('express');
const app = express();
const http = require('http');
var server = http.Server(app);
var io = require('socket.io')(app);

const SocketManager = require('./SocketManager');

const PORT = process.env.port || 3231;

io.on('connection', SocketManager);

server.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});

module.exports = io;
