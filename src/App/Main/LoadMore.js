

import React, { useState } from 'react'
import Loading from './Loading'
import '../../common/style/base.css'
import "./main.css"

const LoadMore=()=> {
  const [news, setBool] = useState(false)
  
 const handleToggleClick=() =>{
   setBool((val) => (
     val?false:true
   ))
 }
  
  
  return (
      <>
       
      <Loading value={news} />
      <div className="wrap-more"> 
        <button className="more" onClick={() => handleToggleClick()}>
          {news ? 'Спрятать' : 'Подгрузить еще!'}
        </button>
      </div>
      </>
    )
  }

export default  LoadMore