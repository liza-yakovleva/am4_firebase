import React, { useState } from 'react'
import MoreNews from "./MoreNews"


const Loading = ({ value }) => {
  if (!value) {
    return null
  }
  return (
    <>
      <MoreNews/>
    </>
  )
}
export default  Loading