import React, {Component} from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Search from './Search/Search'
import Enter from './Enter/Enter'
import EnterOk from './Enter/EnterOk'
import MenuB from './Bur/MenuВ'
import '../../common/style/base.css'
import firebase from 'firebase'
import './Menu/menu.css'
import './Search/search.css'
import { Route } from 'react-router-dom'
import { items } from '../../common/settings'


class Header extends Component {

constructor(props) {
      super(props)
  this.state = {
       menuActive:false,
    user: {
      email:"",
    },
       log:false
      }
}
  
   componentDidMount() {
      this.authListener()
   }
  
   authListener= () =>{
      firebase.auth().onAuthStateChanged((user) => {
         if (user) {
           this.setState({  user: {
      email:user.email,
    }, })
         } 
       }
    )
   }

  setMenuActive = () => {
    this.setState(prevState => ({ menuActive: !prevState.menuActive }))
  }
  setLog = () => {
    this.setState(prevState => ({ log: !prevState.log }))
  }
    closeMenu = () => {
      this.setState({
        menuActive: false
      })
   }
 
  render() {
    console.log(this.state.user)
    
    return (
      <header className="header">
        <div className="container">
          <div className="header-menu">
            <div className="logo-menu-search">
              <div className="logo"><Route path="/" component={Logo} /></div>
              <div className="nav">
                <div className="burger-btn" onClick={() => this.setMenuActive()}>
                  <span></span>
                </div>
              </div>
              <ul className="menu">
                <Route path="/" component={Menu} />
              </ul>
              <div className="wrapper-search">
                <Route path="/" component={Search} />
              </div>
            </div>
            <div className="wrapper-btn">
              {this.state.log?
                <EnterOk userEmail={this.state.user.email} authListener={this.authListener} setLog={this.setLog}/>
                : <Enter user={this.state.user} authListener={this.authListener} setLog={this.setLog}/>
              }
              
            </div>
          </div>
        </div>
        <MenuB active={this.state.menuActive} closeMenu={this.closeMenu} items={items} />
      </header>





   
    )
  }
}

export default Header