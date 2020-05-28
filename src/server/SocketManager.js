const io = require('./index.js').io;
const {
	VERIFY_USER,
	USER_CONNECTED,
	USER_DISCONNECTED,
	LOGOUT,
	COMMUNITY_CHAT,
	MESSAGE_RECIEVED,
	MESSAGE_SENT,
	TYPING,
	PRIVATE_MESSAGE,
} = require('../Events');

const { createUser, createMessage, createChat } = require('../Factories');

let connectedUsers = {};

let communityChat = createChat({isCommunity: true});

module.exports = function (socket) {
	console.log(`Socket Id is ${socket.id}`);

	let sendMessageToChatFromUser;

	let sendTypingFromUser;

	// Verify User
	socket.on(VERIFY_USER, (nickname, callback) => {
		if (isUser(connectedUsers, nickname)) {
			callback({ isUser: true, user: null });
		} else {
			callback({ isUser: false, user: createUser({ name: nickname, socketId: socket.id }) });
		}
	});

	// User Connected with username
	socket.on(USER_CONNECTED, (user) => {
		user.socketId = socket.id;
		connectedUsers = addUser(connectedUsers, user);
		socket.user = user;
		// console.log(user);
		// console.log(socket.user)
		sendMessageToChatFromUser = sendMessageToChat(user.name);
		sendTypingFromUser = sendTypingToChat(user.name);

		// console.log(io);
		io.emit(USER_CONNECTED, connectedUsers);
		console.log(connectedUsers);
	});

	//User disconnects
	socket.on('disconnect', () => {
		if ('user' in socket) {
			connectedUsers = removeUser(connectedUsers, socket.user.name);

			io.emit(USER_DISCONNECTED, connectedUsers);
			console.log('Disconnect', connectedUsers);
		}
	});

	//User logsout
	socket.on(LOGOUT, () => {
		connectedUsers = removeUser(connectedUsers, socket.user.name);
		io.emit(USER_DISCONNECTED, connectedUsers);
		console.log('Disconnect', connectedUsers);
	});

	//Get Community Chat
	socket.on(COMMUNITY_CHAT, (callback) => {
		callback(communityChat);
	});

	socket.on(MESSAGE_SENT, ({ chatId, message }) => {
		sendMessageToChatFromUser(chatId, message);
	});

	socket.on(TYPING, ({ chatId, isTyping }) => {
		sendTypingFromUser(chatId, isTyping);
	});

	socket.on(PRIVATE_MESSAGE, ({ receiver, sender, activeChat }) => {
		// console.log(sender, receiver)
		if (receiver in connectedUsers) {
			const receiverSocket = connectedUsers[receiver].socketId;
			if (activeChat === null || activeChat.id === communityChat.id) {
				const newChat = createChat({ name: `${receiver} & ${sender}`, users: [receiver, sender] });
				socket.to(receiverSocket).emit(PRIVATE_MESSAGE, newChat);
				socket.emit(PRIVATE_MESSAGE, newChat);
			} else {
				socket.to(receiverSocket).emit(PRIVATE_MESSAGE, activeChat);
			}
		}
	});
};

function sendTypingToChat(user) {
	return (chatId, isTyping) => {
		io.emit(`${TYPING}-${chatId}`, { user, isTyping });
	};
}

function sendMessageToChat(sender) {
	return (chatId, message) => {
		io.emit(`${MESSAGE_RECIEVED}-${chatId}`, createMessage({ message, sender }));
	};
}

function addUser(userList, user) {
	let newList = Object.assign({}, userList);
	console.log(user)
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
