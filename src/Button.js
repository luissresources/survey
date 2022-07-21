import React from 'react'

const Button = ({text, handleClick}) => {
  return (
    <button className="capitalize text-white py-2 px-8 md:w-40 shadow-md" onClick={handleClick}>{text}</button>
  )
}

export default Button;