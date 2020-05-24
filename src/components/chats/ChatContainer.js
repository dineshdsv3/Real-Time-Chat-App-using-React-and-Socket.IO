import React from 'react';
import SideBar from './SideBar'

class ChatContainer extends React.Component {

    state = {
        chats: [],
        activeChat:null
    }

    setActiveChat = () => {
        this.setState({activeChat})
    }

	render() {
		const { user, logout } = this.props;
		return (
			<div className="container">
				<SideBar
					logout={logout}
					user={user}
					chats={chats}
					activeChart={activeChart}
					setActiveChat={this.setActiveChat}
				/>
			</div>
		);
	}
}

export default ChatContainer;
