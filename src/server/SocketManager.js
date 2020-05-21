const io = require('./index.js').io;
const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require('../Events');
const { createUser, createmessage, createChat } = require('../Factories');

let connectedUsers = {};

module.exports = function (socket) {
	console.log(`Socket Id is ${socket.id}`);

	// Verify User
	socket.on(VERIFY_USER, (nickname, callback) => {
		if (isUser(connectedUsers, nickname)) {
			callback({ isUser: true, user: null });
		} else {
			callback({ isUser: false, user: createUser({ name: nickname }) });
		}
	});

	// User Connected with username
	socket.on(USER_CONNECTED, (user) => {
		connectedUsers = addUser(connectedUsers, user);
        socket.user = user;
        console.log(io)
		io.emit(USER_CONNECTED, connectedUsers);
		console.log(connectedUsers);
	});
};

function addUser(userList, user) {
	let newList = Object.assign({}, userList);
	newList[user.name] = user;
	return newList;
}

function removeUser(userList, userName) {
	let newList = Object.assign({}, userList);
	delete newList[userName];
	return newList;
}

function isUser(userList, userName) {
	return userName in userList;
}
