import React from 'react';
import SideBar from './SideBar';
import ChatHeading from './ChatHeading'
import Messages from '../messages/Messages'
import MessageInput from '../messages/MessageInput'
import {MESSAGE_SENT,TYPING} from '../../Events'

class ChatContainer extends React.Component {
	state = {
		chats: [],
		activeChat: null,
    };
    
    sendMessage = (chatId, message)=>{ 		const { socket } = this.props
		socket.emit(MESSAGE_SENT, {chatId, message} )
    }
    

    sendTyping = (chatId, isTyping)=>{
		const { socket } = this.props
		socket.emit(TYPING, {chatId, isTyping})
    }

	setActiveChat = (activeChat) => {
		this.setState({ activeChat });
	};

	render() {
		const { user, logout } = this.props;
		const { chats, activeChat } = this.state;
		return (
			<div className="container">
				<SideBar
					logout={logout}
					user={user}
					chats={chats}
					activeChat={activeChat}
					setActiveChat={this.setActiveChat}
				/>
				<div className="chat-room-container">
					{activeChat !== null ? (
						<div className="chat-room">
							<ChatHeading name={activeChat.name} />
							<Messages messages={activeChat.messages} user={user} typingUsers={activeChat.typingUsers} />
							<MessageInput
								sendMessage={(message) => {
									this.sendMessage(activeChat.id, message);
								}}
								sendTyping={(isTyping) => {
									this.sendTyping(activeChat.id, isTyping);
								}}
							/>
						</div>
					) : (
						<div className="chat-room choose">
							<h3>Choose a chat!</h3>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default ChatContainer;
