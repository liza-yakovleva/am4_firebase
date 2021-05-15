import React, { Component } from 'react'
import '../../../common/style/base.css'
import "./enter.css"
import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import { database } from '../../../firebase'
import { Link } from "react-router-dom"

class EnterOk extends Component {
constructor(props) {
		super(props)
	this.state = {
			// dataUsers:[]
		}
	}
componentDidMount() {
    database.ref('3/users').on('value', (snapshot) => {
      this.setState({
        dataUsers: snapshot.val()
      })
		})
		
    }
	handleLogout = () => {
		firebase.auth().signOut()
		// this.props.authListener()
		this.props.setLog()
		// console.log(this.props)
	}

	render()
	{
	return (
		<>
			<Link to="/favorites"><button className="favorite">
				<div className="heart"></div>
				</button></Link>
			{
				this.state.dataUsers ?
				this.state.dataUsers.filter((user) => user.email === this.props.userEmail)
					.map((user, id) => (

			<div className="user" key={id}>
			<div className="user-wrap" >
				<div className="user-email">{user.email}</div>
								<div className="user-name">{user.name}</div>
				</div>
							<div className="user-avatar">
								<img src={user.avatar} alt="" />
							</div>
			</div>
					))
					: null
			}
			<button onClick={this.handleLogout} className="logout">Выход</button>
		</>
  )
}
}

export default EnterOk 