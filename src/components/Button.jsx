import React from 'react'

const Button = ({className, onClick, children}) => {
  return (
      <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] w-fit">
        <button onClick={onClick} className={`bg-[#080312] rounded-md ${className}`}>
          {children}
        </button>
      </div>
  )
}

export default Button
