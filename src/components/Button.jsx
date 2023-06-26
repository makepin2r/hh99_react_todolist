import React from 'react'
import "./Button.css"

const Button = ({text, onClickFunc, type, classType}) => {
  return (
    <button className={`btn ${classType}`} onClick={onClickFunc} type={type}>{text}</button>
  )
}

export default Button