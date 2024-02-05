import React from 'react'

const Button = ({number=0,text}) => {
  return (
    <button className='btn btn-toggle-info flex'>
        <h3 className="number">0{number}</h3>
        <h3>{text}</h3>
    </button>
  )
}

export default Button