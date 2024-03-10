import React from 'react'

const Button = ({className, onClick, children}) => {
  return (
      <div class="w-auto h-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]">
        <button onClick={onClick} className={`bg-[#080312] w-full h-full rounded-md ${className}`}>
          {children}
        </button>
      </div>
  )
}

export default Button
