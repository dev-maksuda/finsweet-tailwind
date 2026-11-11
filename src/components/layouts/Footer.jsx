import React from 'react'
import Container from '../common/container'
import footerlogo from '../../assets/footer.png'
import Image from '../ui/image'
import Anchor from '../ui/anchor'

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

const linkStyle = `font-robotoCondensed text-xs text-white uppercase`

const Footer = () => {
  return (
    <footer className='bg-footerbg py-16'>
      <Container>
        <div className='flex justify-between'>
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
          <div>
            <div className='w-[512px]'>
              <h2 className='max-w-[377px] font-robotoCondensed text-white font-bold text-[32px] leading-11 uppercase'>
                Subscribe to get Latest Updates and News
              </h2>
              <div className='border border-white/15 h-16 mt-8 rounded-xl relative'>
                <input 
                  type='email' 
                  placeholder='Yourmail@gmail.com' 
                  className='h-full w-[80%] rounded-xl text-white font-robotoCondensed font-normal text-base placeholder:text-white pl-5 outline-none' 
                />
                <button className='bg-primary h-full absolute right-0 top-0 rounded-xl px-16 font-robotoCondensed font-normal text-base cursor-pointer'>
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
