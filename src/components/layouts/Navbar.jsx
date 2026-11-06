import React from 'react'
import Container from '../common/container'
import logo from '../../assets/logo.png'
import Image from '../ui/image'
import Anchor from '../ui/anchor'
import { menuData } from '../../dummyData/menuData'


const Navbar = () => {
  return (
    <nav className='bg-[#0D0D0D]'>
      <Container>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-32'>
            <Anchor href="/">
              <Image src={logo} alt="not found" />
            </Anchor>
            <ul className='flex items-center gap-12'>
              {menuData.map((item,index)=>(
                <li key={index}>
                  <Anchor href={item.url} className="font-normal text-base uppercase text-white
                  font-robotoCondensed">
                    {item.label}
                  </Anchor>
                </li>

              ))
              }
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
