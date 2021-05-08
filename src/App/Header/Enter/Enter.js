import React from 'react'
import "./enter.css"
import '../../../common/style/base.css'
import Login_in from './Login_in'
import Registration from './Registration'
import {useState} from 'react'
import { connect } from 'react-redux'
const Enter = ({ authListener, userEmail, setLog }) => {

	const [showEntry, setBoolE] = useState(false)
	const [showReg, setBoolR] = useState(false)
	const handleToggleR = () => {
		if (showEntry) setBoolR(false) 
	}
	const handleToggleE = () => {
		if (showReg) setBoolE(false)
	}
	const handleEnterToggleClick = () => {
		setBoolE((val) => (
			val ? false	: true
		))
		setTimeout(handleToggleE, 200)
	
		authListener()
	}

			const handleRegToggleClick = () => {
		setBoolR((val) => (
     val ? false : true
		))
				setTimeout(handleToggleR ,200)
	}
// console.log(showEntry,showReg)
	return (
		<>
			<button onClick={() => handleEnterToggleClick()} className="log-in enter">{showEntry?'Закрыть':'Вход'}</button>
			<button onClick={() => handleRegToggleClick()} className="log-in reg"> {showReg?'Закрыть':'Регистрация'}</button>
		   { showEntry ? <Login_in handleEnterToggleClick={handleEnterToggleClick} setLog={setLog}/> : null }
			{showReg ? <Registration authListener={authListener} handleRegToggleClick={handleRegToggleClick}/>: null }
				</>
  )
}


const mapDispatchToProps = dispatch => ({
	userEmail: (userEmail) => dispatch({
		type: "USER_LOLININ",
		user:userEmail
	})
})
   


export default connect(mapDispatchToProps)(Enter)
 