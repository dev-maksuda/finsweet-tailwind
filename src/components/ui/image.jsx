import React from 'react'

const image = ({src, alt, className}) => {
  return (
    <img src={src} alt={alt} className={className}/>
  )
}

export default image