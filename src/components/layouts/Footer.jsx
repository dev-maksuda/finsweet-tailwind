import React from 'react'
import Container from '../common/Container'
import footerlogo from '../../assets/footer.png'
import Image from '../ui/image'
import Anchor from '../ui/anchor'
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6"

export const companyInfo = [
  {
    id: 1,
    title: "(480) 555-0103"
  },
  {
    id: 2,
    title: "4517 Washington Ave."
  },
  {
    id: 3,
    title: "finsweet@example.com"
  },
]

const quickLinks = [
  { id: 1, label: "About Us", url: "/about" },
  { id: 2, label: "Sermons", url: "/sermons" },
  { id: 3, label: "Events", url: "/events" },
  { id: 4, label: "Blog", url: "/blog" },
]

const linkStyle = `font-robotoCondensed text-xs text-white uppercase`

const Footer = () => {
  return (
    <footer className='bg-footerbg py-16'>
      <Container>
        <div className='flex flex-col lg:flex-row justify-between gap-12'>
          
          <div>
            <Anchor href="/">
              <Image src={footerlogo} alt="logo" />
            </Anchor>
            <div className='mt-4'>
              <span className={linkStyle}>© Copyright Finsweet 2022</span>
            </div>
            <ul className='mt-8 grid grid-cols-1 gap-4'>
              {companyInfo.map((item) => (
                <li key={item.id} className={linkStyle}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex gap-16 sm:gap-20'>
            <div>
              <h3 className='font-robotoCondensed text-base text-white font-normal mb-5'>
                Quicklinks
              </h3>
              <ul className='grid grid-cols-1 gap-6'>
                {quickLinks.map((item) => (
                  <li key={item.id}>
                    <Anchor href={item.url} className={`${linkStyle} opacity-75 hover:opacity-100 hover:text-primary transition-all`}>
                      {item.label}
                    </Anchor>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='font-robotoCondensed text-base text-white font-normal mb-5'>
                Connect
              </h3>
              <div className='flex items-center gap-5 text-primary text-base'>
                <Anchor href="#" className="hover:text-white transition-all">
                  <FaFacebook />
                </Anchor>
                <Anchor href="#" className="hover:text-white transition-all">
                  <FaTwitter />
                </Anchor>
                <Anchor href="#" className="hover:text-white transition-all">
                  <FaLinkedin />
                </Anchor>
              </div>
            </div>
          </div>

          <div>
            <div className='w-full lg:w-[512px]'>
              <h2 className='max-w-[377px] font-robotoCondensed text-white font-bold text-[32px] leading-11 uppercase'>
                Subscribe to get Latest Updates and News
              </h2>
              <div className='border border-white/15 h-16 mt-8 rounded-xl relative'>
                <input 
                  type='email' 
                  placeholder='Yourmail@gmail.com' 
                  className='h-full w-[60%] rounded-xl text-white font-robotoCondensed font-normal text-base placeholder:text-white pl-5 outline-none' 
                />
                <button className='bg-primary h-full absolute right-0 top-0 rounded-xl px-10 sm:px-16 font-robotoCondensed font-normal text-base cursor-pointer text-[#1C1D28]'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer
