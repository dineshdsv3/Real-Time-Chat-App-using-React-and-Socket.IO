import React from 'react';
import io from 'socket.io-client';
import { VERIFY_USER, USER_CONNECTED, LOGOUT } from '../Events';
import LoginForm from './LoginForm';
import Chatcontainer from './chats/ChatContainer';

const socketUrl = '/';
class Layout extends React.Component {
	state = {
		socket: 'null',
		user: '',
	};

	componentDidMount = async () => {
		await this.initSocket();
		await this.initUser();
	};

	initUser = async () => {
		const arr = ['a','b','c','d','e','f','g']
		const ind = Math.floor( Math.random() * 7 )
		localStorage.setItem('user', arr[ind]);
		let {socket} = this.state;
		const userData = await localStorage.getItem('user');
		await this.setState({ user: userData });
		socket.emit(VERIFY_USER, this.state.user, this.setUser);
		// await this.setUser(this.state.user)
	};

	initSocket = () => {
		const socket = io(socketUrl);
		socket.on('connect', () => {
			console.log('Connected');
		});
		this.setState({ socket });
	};

	setUser1 = (user) => {
		const { socket } = this.state;
		socket.emit(USER_CONNECTED, user);
		this.setState({ user });
	};

	setUser = ({user, isUser}) => {
        console.log(user, isUser);
        if(isUser) {
			this.setError("UserName already taken")
        } else {
            this.setState({error:null})
            this.setUser1(user)
        }
	}

	setError = (err) => {
        this.setState({error:err})
    }

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
