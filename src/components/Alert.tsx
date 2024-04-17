import React, { Children, ReactNode } from 'react'

interface Prop{
    children:ReactNode
}

function Alert({children}:Prop) {
  return (
    <div className='alert alert-success'>
      {children}
    </div>
  )
}

export default Alert
