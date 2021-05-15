import React from 'react'
import "./enter.css"
import '../../../common/style/base.css'

import { Component } from 'react';
import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-database'

class Login_in extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			hasAccount: false,
			userEmail: '',
			
			
		}
	}

	componentDidMount() {
		const db = firebase.database()
	}

	handleChange = ({ target: { value, id } }) => {
		console.log(value, id )
		this.setState({
			[id]: value,
		})
	}
	handleClick = () => {
		
	}
	entryAccount = () => {

		const { email, password } = this.state
		firebase.auth()
			.signInWithEmailAndPassword(email, password)
			.then(res => {
				console.log(res)
				
			
				this.setState({
					hasAccount: true,
					userEmail:res.user.email,
				})
			})
			.catch(err => {
				console.log(err)
				 alert('Неправильный логин или пароль')
})
	}
	
	render() {
		return (
			<>
				{
					this.state.hasAccount ?
						(<div className="field-for-registration field-ok">
					<form onSubmit={this.props.setLog}>
								<h4>Вы успешно вошли в свой аккаунт {this.state.userEmail}</h4>
						<input type="submit" value="Ok" 
									className="reg-submit"
						/>
					</form></div> ) :
						(
							<div className="field-for-log-in">
								<form onSubmit={this.entryAccount} className="form-login">
									<h3>Вход</h3>
									<input type="text"
										id="email"
										className="login"
										placeholder="email"
										onChange={this.handleChange} />
									<input type="password"
										id="password"
										className="password"
										placeholder="Пароль"
										onChange={this.handleChange} />
									{/* <Checkbox
										inputProps={{ 'aria-label': 'primary checkbox' }}
									/>
									<span>Запомнить пароль?</span> */}
									<input type="submit" className="reg-submit"  />
								</form>
							</div>
						)
				}
				
			</>
		)
	}

}
export default Login_in