import React from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../Events';
import LoginForm from './LoginForm';
import Chatcontainer from './chats/ChatContainer';

const socketUrl = '/';
class Layout extends React.Component {
	state = {
		socket: 'null',
		user: '',
	};

	componentDidMount() {
		this.initSocket();
	}

	initSocket = () => {
		const socket = io(socketUrl);
		socket.on('connect', () => {
			console.log('Connected');
		});
		this.setState({ socket });
	};

	setUser = (user) => {
		const { socket } = this.state;
		socket.emit(USER_CONNECTED, user);
		this.setState({ user });
	};

	logout = () => {
		const { socket } = this.state;
		socket.emit(LOGOUT);
		this.setState({ user: null });
	};

	render() {
		const { socket, user } = this.state;
		return (
			<div className="container">
				{!user ? (
					<LoginForm socket={socket} setUser={this.setUser} />
				) : (
					<Chatcontainer socket={socket} user={user} logout={this.logout} />
				)}
			</div>
		);
	}
}

export default Layout;
