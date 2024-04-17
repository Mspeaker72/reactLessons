import React, { ReactNode } from 'react'

interface Prop{
    text:string
    color:string
    onClick:()=> void
    
}

function Button({text,color,onClick}:Prop) {
  return <button type='button' className={"btn btn-"+color} onClick={onClick}>{text}</button>
}

export default Button
