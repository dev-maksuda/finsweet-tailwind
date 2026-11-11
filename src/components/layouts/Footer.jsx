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
        <div className='flex'>
          <div>
            <Anchor href="/">
              <Image src={footerlogo} alt="logo" />
            </Anchor>
            <div className='mt-4'>
              <span className={linkStyle}>© Copyright Finsweet 2022</span>
            </div>
            <ul className='mt-8 grid grid-cols-1 gap-4'>
              {companyInfo.map((item, index) => (
                <li key={item.id } className={linkStyle}>  {item.title} </li>
              ))}
            </ul>

          </div>
          <div></div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
