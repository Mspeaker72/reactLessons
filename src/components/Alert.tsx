import React, { Children } from 'react'

interface Prop{
    children:string
}

function Alert({children}:Prop) {
  return (
    <div className='alert alert-success'>
      {children}
    </div>
  )
}

export default Alert
