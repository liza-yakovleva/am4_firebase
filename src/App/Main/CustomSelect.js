import React from 'react'
import Select from 'react-select'
import "./main.css"


const CustomSelect = ({style, options, defaultValue, onChange}) => {
  return (
    <div style={style}>
      <Select options={options}
        defaultValue={defaultValue}
        onChange={onChange} />
    </div>
  ) 
}
export default CustomSelect