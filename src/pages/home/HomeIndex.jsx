import React from 'react'
import Navbar from '../../components/layouts/Navbar'
import Banner from '../../components/pages/home/Banner'
import Footer from '../../components/layouts/Footer'
import Relevents from '../../components/pages/home/Relevants'
import LoveSection from '../../components/pages/home/LoveSection'

const Homeindex = () => {
  return (
    <>
      <Banner />
      <Relevents />
      <LoveSection />
    </>
  )
}

export default Homeindex
