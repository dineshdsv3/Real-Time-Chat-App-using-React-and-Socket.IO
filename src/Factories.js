const { v4: uuid } = require('uuid');

const createUser = ({ name = '', socketId = null } = {}) => ({ id: uuid(), name, socketId });

const createMessage = ({ message = '', sender = '' } = {}) => ({
	id: uuid(),
	time: getTime(new Date(Date.now())),
	message,
	sender,
});

const createChat = ({ messages = [], name = 'Community', users = [], isCommunity = false } = {}) => ({
	id: uuid(),
	name: isCommunity ? name : createChatNameFromUsers(users),
	messages,
	users,
	typingUsers: [],
	isCommunity,
});

const createChatNameFromUsers = (users, excludedUser = "") => {
	return users.filter(u => u !== excludedUser).join(' & ') || "Empty Chat"
}

const getTime = (date) => {
	return `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`;
};

module.exports = {
	createUser,
	createChat,
	createMessage,
	createChatNameFromUsers
};
