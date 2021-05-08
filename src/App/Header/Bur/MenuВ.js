import React from "react"
import "./menub.css"
import { Link } from "react-router-dom"

const MenuB = ({ items,active, closeMenu}) => {
	return (
    <div
      className={active ? "menu-b active" : "menu-b"}>
      <button  className="btn-close"onClick={() => closeMenu()}>X</button>
      <div className="blur" />
      <div className="menu_content" onClick={(e) => e.stopPropagation()}>
        <ul className="menub-ul">
          {items.map((item, id) => (
            <li key={id} className="menub-li">
              <Link to={item.to} className="menub-a">
                {item.value}
              </Link>
              <span className="material-icons">
                <i class={item.icon}></i>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
 }

export default MenuB