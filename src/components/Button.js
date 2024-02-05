import React from 'react'

const Button = ({number=0,text,onClick,active,color}) => {
  return (
    <button onClick={onClick} style={active === text ? {backgroundColor: color,border: `1px solid ${color}`} : {background: "transparent"}} className={"btn btn-toggle-info flex"}>
        <h3 className="number">0{number}</h3>
        <h3>{text}</h3>
    </button>
  )
}

export default Button