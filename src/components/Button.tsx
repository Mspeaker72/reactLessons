import React, { ReactNode } from 'react'

interface Prop{
    text:string
    color?:'primary'|'danger'|'dark'|'success'
    onClick:()=> void
    
}

function Button({text,color="primary",onClick}:Prop) {
  return <button type='button' className={"btn btn-"+color} onClick={onClick}>{text}</button>
}

export default Button
