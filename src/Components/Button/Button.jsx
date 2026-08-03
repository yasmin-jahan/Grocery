import React from 'react'
import './Button.css'

const Button = (props) => {
  return (

 <button className='common_btn bg-gradient-to-b from-orange-400 to-orange-500 text-white  rounded-lg cursor-pointer hover:scale-105 hover:to-orange-600 transition-all duration-300'>{props.content}</button>
   
  )
}

export default Button