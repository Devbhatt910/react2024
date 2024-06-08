import React from 'react'
// import { Children } from 'react'

const Button = (props) => {
    

    
  return (
    <div>
      <button onClick={props.funName} className={props.class}>
        {props.name}
      </button>
    </div>
  )
}

export default Button
