import React from 'react'

const Button = ({className, onClick, children, full, border}) => {
  return (
      <div className={`rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ${border ? "p-[2px]" : ""} ${full ? "w-full" : "w-fit"}`}>
        <button onClick={onClick} className={`bg-[#080312] rounded-md ${className}`}>
          {children}
        </button>
      </div>
  )
}

export default Button
