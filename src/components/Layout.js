import React from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED } from '../Events';

const socketUrl = 'http://192.168.0.118:3231';
class Layout extends React.Component {
	state = {
		socket: 'null',
		user: 'null',
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

	render() {
		const { title } = this.props;
		return <div className="container">{title}</div>;
	}
}

export default Layout;
