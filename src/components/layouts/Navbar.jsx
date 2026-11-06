import React from 'react'
import Container from '../common/container'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='bg-[#0D0D0D]'>
      <Container className='relative'>
        <div className="">
            <div className="">
                <img src={logo} alt="img"/>
            </div>
            <div className="">
                <button>Contact</button>
            </div>
        </div>

      </Container>
    </nav>
  )
}

export default Navbar
