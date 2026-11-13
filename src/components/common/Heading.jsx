import React from 'react'

const Heading = ({ children, className }) => {
  return (
    <h2 className={`font-robotoCondensed font-bold text-3xl sm:text-4xl lg:text-5xl uppercase text-[#161722] leading-tight ${className}`}>
      {children}
    </h2>
  )
}

export default Heading
