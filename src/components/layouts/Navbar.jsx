import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../common/Container'
import logo from '../../assets/logo.png'
import Image from '../ui/image'
import Anchor from '../ui/anchor'
import { menuData } from '../../dummyData/menuData'
import { FaBars } from "react-icons/fa6";
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const [sidebarShow, setSidebarShow] = useState(false)
  const pathname = useLocation()
  useEffect( () =>{},[])
  console.log(pathname)
  return (
    <nav className='bg-navbg py-3'>
      <Container >
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-32'>
            <Anchor href="/" className="relative after:absolute after:content-[''] after:w-0.5 after:bg-white/10 after:h-50 after:-right-16 after:-bottom-7">
              <Image src={logo} alt="not found" />
            </Anchor>
            <ul className='hidden lg:flex items-center gap-12'>
              {menuData.map((item,index)=>(
                <li key={index}>
                  <NavLink to={item.url} className={`font-normal text-base uppercase
                    font-robotoCondensed ${item.url === pathname.pathname ? "text-[#FFD2A4]" :
                    "text-white"}`}>
                      {item.label}
                  </NavLink>

              

                </li>
              ))
              }
            </ul>
            </div>
            <div className="hidden lg:block mr-[110px]">

            <button className='bg-primary px-12 py-5 uppercase font-normal text-base text-[#1C1D28] rounded-2xl font-robotoCondensed'>
            Contact Us</button>
            </div>
            <button
              type="button"
              aria-label="Open navigation menu"
              aria-expanded={sidebarShow}
              onClick={() => setSidebarShow(true)}
              className="text-white lg:hidden"
            >
              <FaBars />
            </button>
        </div>

      </Container>
      <AnimatePresence>
        {sidebarShow && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setSidebarShow(false)}
              className="fixed inset-0 z-20 bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.aside
              className="fixed right-0 top-0 z-30 h-screen w-[300px] bg-navbg p-6 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <button
                type="button"
                onClick={() => setSidebarShow(false)}
                className="text-white"
              >
                Close
              </button>
              <ul className='flex flex-col gap-6 mt-8'>
                {menuData.map((item, index) => (
                  <li key={index} onClick={() => setSidebarShow(false)}>
                    <Anchor href={item.url} className="font-normal text-lg uppercase text-white font-robotoCondensed block">
                      {item.label}
                    </Anchor>
                  </li>
                ))}
              </ul>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar