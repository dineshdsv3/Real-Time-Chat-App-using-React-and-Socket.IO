const express = require('express');
const app = express();
const http = require('http');
var server = http.Server(app);
var io =  module.exports.io = require('socket.io')(server);

const SocketManager = require('./SocketManager');

const port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/../../build'))

io.on('connection', SocketManager);

server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
