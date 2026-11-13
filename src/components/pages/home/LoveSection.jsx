import React from 'react'
import Container from '../../common/Container'
import Image from '../../ui/image'
import Anchor from '../../ui/anchor'
import { FaArrowRightLong } from "react-icons/fa6"

import loveImg1 from '../../../assets/love1.png'
import loveImg2 from '../../../assets/love2.png'
import loveImg3 from '../../../assets/love3.png'

const LoveSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        
        <div className="text-center max-w-[846px] mx-auto px-4 md:px-0">
          <span className="font-robotoCondensed font-normal text-base uppercase text-[#161722] tracking-wider block">
            SUB-HEADLINE
          </span>
          <h2 className="font-robotoCondensed font-bold text-3xl sm:text-4xl lg:text-5xl uppercase text-[#161722] mt-4 mb-6">
            LOVE AND COMPASSION
          </h2>
          <p className="font-robotoCondensed font-normal text-base text-[#161722]/80 leading-6 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button className="bg-primary px-14 py-5 uppercase font-normal text-base text-[#1C1D28] rounded-xl font-robotoCondensed hover:bg-[#1C1D28] hover:text-white transition-all cursor-pointer">
            READ MORE
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1024px] mx-auto mt-12 px-4 md:px-0 items-start">
          
          <div className="w-full">
            <Image 
              src={loveImg1} 
              alt="Praying Man" 
              className="w-full h-[384px] object-cover rounded-[30px]" 
            />
          </div>

          <div className="w-full md:mt-16">
            <Image 
              src={loveImg2} 
              alt="Reading Bible" 
              className="w-full h-[512px] object-cover rounded-[30px]" 
            />
          </div>

          <div className="w-full">
            <Image 
              src={loveImg3} 
              alt="Church Blessing" 
              className="w-full h-[384px] object-cover rounded-[30px]" 
            />
          </div>

        </div>

        <div className="text-center max-w-[512px] mx-auto mt-16 px-4 md:px-0">
          <span className="font-robotoCondensed font-normal text-base uppercase text-[#161722] tracking-wider block">
            OUR MISSION & VISION
          </span>
          <h3 className="font-robotoCondensed font-bold text-2xl sm:text-[32px] uppercase text-[#161722] mt-4 mb-4">
            CELEBRATE WITH US
          </h3>
          <p className="font-robotoCondensed font-normal text-base text-[#161722]/80 leading-6 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Anchor 
            href="/about" 
            className="inline-flex items-center gap-2 font-robotoCondensed font-normal text-sm text-[#161722] hover:text-primary transition-all"
          >
            <span>Read More</span>
            <FaArrowRightLong />
          </Anchor>
        </div>

      </Container>
    </section>
  )
}

export default LoveSection
