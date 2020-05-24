import React from 'react';
import SideBar from './SideBar'

class ChatContainer extends React.Component {

    state = {
        chats: [],
        activeChat:null
    }

    setActiveChat = (activeChat) => {
        this.setState({activeChat})
    }

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
			</div>
		);
	}
}

export default ChatContainer;
