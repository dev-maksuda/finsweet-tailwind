import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='flex flex-col gap-6 '>
        <h1 className='text-center text-[120px] font-bold'>404 Error</h1>
        <NavLink to="/" className="bg-primary text-black px-10 py-5 mx-auto">
          Back to Home
        </NavLink>
      </div>
    </div>
  )
}

export default ErrorPage
