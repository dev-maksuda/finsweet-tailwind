import React from 'react'

const Paragraph = ({ children, className }) => {
  return (
    <p className={`font-robotoCondensed font-normal text-base text-[#161722]/80 leading-6 ${className}`}>
      {children}
    </p>
  )
}

export default Paragraph
