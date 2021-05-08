import React, {Component} from 'react'
import "./enter.css"
import '../../../common/style/base.css'
import firebase from 'firebase'
import { database } from '../../../firebase'
import avatarImg from '../../img/avatar13.png'

class Registration extends Component {
	constructor(props) {
		super(props)
		this.state = {
				user:{
			  	email: '',
					password: '',
					name: '',
					avatar: avatarImg,
			},
			// dataUsers:[{}],
			hasAccount: false
		}
	}
componentDidMount() {
    database.ref('3/users').on('value', (snapshot) => {
      this.setState({
        dataUsers: snapshot.val()
      })
    })
    }
	// componentDidMount() {
	// 	const db = firebase.database()
	// 	console.log(db)
	// }

	handleChange = ({ target: { value, id } }) => {
	

		this.setState({
			user: {
				...this.state.user,
				[id]: value
			}
		})

	}
	
	createAccount = () => {
		firebase.auth()
			.createUserWithEmailAndPassword(this.state.user.email, this.state.user.password)
			.then(res => {
				console.log(res)
				res ? this.setState({hasAccount: true }) : this.setState({hasAccount: false })
			})
			.catch(error => {
				alert(`Не удалось зарегестрироваться. Введены недопустимые данные!  ${error}`)
				console.log(error)
			})
		
		setTimeout(() => {
			firebase.auth().signOut()
		this.props.authListener()
     database.ref(`3/users`)
                        .child(`${this.state.dataUsers.length}`)
			 .set(this.state.user)
				 }, 1000)
		
	}


	render() {
		
		return (
			<>
					{
					this.state.hasAccount ?
						(<div class="field-for-registration field-ok">
					<form onSubmit={this.props.handleRegToggleClick}>
						<h4>Вы успешно зарегистрировались, войдите в свой аккаунт</h4>
						<input type="submit" value="Ok" 
									className="reg-submit"
						/>
					</form></div> ) :
						(
				<div class="field-for-registration">
					<form onSubmit={this.createAccount}>
						<h3>Регистрация</h3>
						<input type="text"
							id="name"
							className="name"
							placeholder="Ваш Имя"
							onChange={this.handleChange} />
									
						{/* <input type="file"
							id="file"
							className="file"
						 /> */}
									
									
						<input type="text"
							id="email"
							className="login"
							placeholder="Почта"
							onChange={this.handleChange} />
									
						<input type="password"
							id="password"
							className="password"
							placeholder="Пароль"
							onChange={this.handleChange} />
									
						<input type="submit"
						className="reg-submit"
						/>
					</form>
							</div>
								)
				}
			</>
		)
	}
}



export default Registration