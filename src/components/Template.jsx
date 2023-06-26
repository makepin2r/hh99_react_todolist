import React from 'react'
import "../App.css";

const Template = ({children}) => {
    return (
        <div className='template'>
            <h1>T<i className='logo'></i>DO LIST</h1>
            <div>{children}</div>
        </div>
    )
}

export default Template