import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../common/container'
import logo from '../../assets/logo.png'
import Image from '../ui/image'
import Anchor from '../ui/anchor'
import { menuData } from '../../dummyData/menuData'
import { FaBars } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa6"

const Navbar = () => {
  const [sidebarShow, setSidebarShow] = useState(false)

  return (
    <nav className='bg-navbg py-3 relative z-40'>
      <Container>
        <div className='flex justify-between items-center px-4 md:px-0'>
          
          <div className='flex items-center gap-6 lg:gap-32'>
            <Anchor href="/" className="relative after:absolute after:content-[''] after:w-0.5 after:bg-white/10 after:h-50 after:-right-16 after:-bottom-7">
              <Image src={logo} alt="not found" />
            </Anchor>
            
            <ul className='hidden lg:flex items-center gap-12'>
              {menuData.map((item, index) => (
                <li key={index}>
                  <Anchor href={item.url} className="font-normal text-base uppercase text-white font-robotoCondensed hover:text-primary transition-all">
                    {item.label}
                  </Anchor>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <button className='bg-primary px-12 py-5 uppercase font-normal text-base text-[#1C1D28] rounded-2xl font-robotoCondensed hover:bg-white transition-all'>
              Contact Us
            </button>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={sidebarShow}
            onClick={() => setSidebarShow(true)}
            className="text-white text-2xl lg:hidden cursor-pointer p-2"
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
              className="fixed inset-0 z-20 bg-black/60 lg:hidden cursor-default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            />

            <motion.aside
              className="fixed right-0 top-0 z-30 h-screen w-[260px] sm:w-[300px] bg-[#1C1D28] p-6 lg:hidden flex flex-col justify-between shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div>
                <div className='flex justify-between items-center mb-10 pb-4 border-b border-white/10'>
                  <Image src={logo} alt="not found" className="h-8 w-auto" />
                  <button
                    type="button"
                    onClick={() => setSidebarShow(false)}
                    className="text-white text-2xl cursor-pointer hover:text-primary transition-all"
                  >
                    <FaTimes />
                  </button>
                </div>

                <ul className='flex flex-col gap-6'>
                  {menuData.map((item, index) => (
                    <li key={index} onClick={() => setSidebarShow(false)}>
                      <Anchor href={item.url} className="font-normal text-lg uppercase text-white font-robotoCondensed block hover:text-primary transition-all">
                        {item.label}
                      </Anchor>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <button className='bg-primary w-full py-4 uppercase font-normal text-base text-[#1C1D28] rounded-2xl font-robotoCondensed hover:bg-white transition-all'>
                  Contact Us
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
