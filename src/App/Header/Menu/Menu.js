import React from "react";
import { Link } from "react-router-dom"
import "./menu.css"
import '../../../common/style/base.css'


const Menu = () => {
  return (
   	  
					<>
					 <li className="category-menu"><Link to="/" className="category-menu-a">Главная</Link></li> 
            <li className="category-menu"><Link to="/article"className="category-menu-a">Статьи</Link></li>
            <li className="category-menu"><Link to="/trailer" className="category-menu-a">Трейлеры</Link></li>
            <li className="category-menu"><Link to="/game" className="category-menu-a">Игры</Link></li>
					</>
				
  )
}

export default Menu 