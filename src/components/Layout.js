import React from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../Events';
import LoginForm from './LoginForm';

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
    
    logout = () => {
        const { socket } = this.state;
        socket.emit(LOGOUT)
        this.setState({user:null});
    }

	render() {
        const { socket } = this.state;
		return (
            <LoginForm socket={socket} setUser={this.setUser}/>
        );
	}
}

export default Layout;
