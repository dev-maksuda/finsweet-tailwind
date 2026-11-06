import React from 'react'

const anchor = ({children, href, className}) => {
  return (
    <a href={href} className={className}>
        {children}
        </a>
  )
}

export default anchor