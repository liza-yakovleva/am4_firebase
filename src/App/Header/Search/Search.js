import React from "react"
import "./search.css"
import '../../../common/style/base.css'


const Search = () => {
	return (
		<>
		<div className="search"><i className="fas fa-search"></i></div>
            <form>
              <input type="search" placeholder="Поиск" className="form-search"></input>
			</form>
				</>
  )
}

export default Search 