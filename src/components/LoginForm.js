import React from 'react';
import { VERIFY_USER } from '../Events';

class LoginForm extends React.Component {
	state = {
		nickname: '',
		error: '',
    };
    
    setUser = ({user, isUser}) => {
        if(isUser) {
            this.setError("UserName already taken")
        } else {
            this.props.setUser(user)
        }
    }

    setError = (err) => {
        this.setState({error:err})
    }

	handleChange = (e) => {
		e.preventDefault();
		this.setState({ nickname: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { socket } = this.props;
		const { nickname } = this.state;
		socket.emit(VERIFY_USER, nickname, this.setUser);
	};
	render() {
		const { nickname, error } = this.state;
		return (
			<div className="login">
				<form onSubmit={this.handleSubmit} className="login-form">
					<label htmlFor="nickname">
						<h2>Got a Nickname?</h2>
					</label>
					<input
						ref={(input) => (this.textInput = input)}
						type="text"
						id="nickname"
						value={nickname}
						placeholder="Nickname"
						onChange={this.handleChange}
					/>
					<div className="error">{error ? error : null}</div>
				</form>
			</div>
		);
	}
}

export default LoginForm;
