import React from 'react'
import Navbar from '../../components/layouts/Navbar'
import Banner from '../../components/pages/home/Banner'
import Footer from '../../components/layouts/Footer'
import Relevents from '../../components/pages/home/Relevants'
import LoveSection from '../../components/pages/home/LoveSection'
import BenefitsSection from '../../components/pages/home/BenefitsSection'

const Homeindex = () => {
  return (
    <>
      <Banner />
      <Relevents />
      <LoveSection />
      <BenefitsSection />
    </>
  )
}

export default Homeindex
