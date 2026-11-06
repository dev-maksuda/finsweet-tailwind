import React from 'react'
import Container from '../common/container'
import logo from '../../assets/logo.png'
import Image from '../ui/image'
import Anchor from '../ui/anchor'

const menuData = [
  {
    id: 1,
    label: "home",
    url: "#"
  },
  {
    id: 2,
    label: "About",
    url: "#"
  },
  {
    id: 3,
    label: "service",
    url: "#"
  },
  {
    id: 4,
    label: "blog",
    url: "#"
  },
]
const Navbar = () => {
  return (
    <nav className='bg-[#0D0D0D]'>
      <Container className='relative'>
        <div className="">
            <div className="">
                <Anchor href="/">
                    <img src={logo} alt="not found"/>
                </Anchor>
                <ul>

                    <li>
                        <Anchor href="#" className="font-normal text-base uppercase text-white font-robotoCondensed">
                        Home
                        </Anchor>
                    </li>
                </ul>

            </div>
            <div className="">
                <button className='bg-[#FFD2A4] px-12 py-5 uppercase font-normal text-base text-[#1C1D28] rounded-2xl font-robotoCondensed'>
                Contact Us</button>
                
            </div>
        </div>

      </Container>
    </nav>
  )
}

export default Navbar
