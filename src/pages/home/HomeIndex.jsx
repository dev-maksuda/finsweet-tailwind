import React from 'react'
import Navbar from '../../components/layouts/Navbar'
import Banner from '../../components/pages/home/Banner'
import Footer from '../../components/layouts/Footer'
import Relevents from '../../components/pages/home/Relevants'

const Homeindex = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Relevents />
      <Footer />
    </>
  )
}

export default Homeindex
