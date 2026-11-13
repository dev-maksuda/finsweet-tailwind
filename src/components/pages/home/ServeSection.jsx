import React from 'react'
import Container from '../../common/container'
import { FaQuoteRight } from "react-icons/fa6"

import serveBg from '../../../assets/serve.jpg'

const ServeSection = () => {
  return (
    <section 
      className="py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${serveBg})` }}
    >
      <Container>
        <div className="max-w-[768px] mx-auto bg-white p-8 sm:p-16 lg:p-[72px] border-b-[16px] border-primary relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 relative z-10">
            
            {/* Left Side Text Content */}
            <div className="max-w-[370px]">
              <h2 className="font-robotoCondensed font-bold text-3xl sm:text-4xl lg:text-[44px] uppercase text-[#161722] leading-tight">
                WE WANT TO SERVE THE WORLD AROUND US
              </h2>
              <p className="font-robotoCondensed font-normal text-base text-[#161722]/80 mt-4 mb-8 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </p>
              <button className="bg-primary px-14 py-5 uppercase font-normal text-base text-[#161722] rounded-xl font-robotoCondensed hover:bg-[#161722] hover:text-white transition-all cursor-pointer">
                VISIT
              </button>
            </div>

            {/* Right Side Large Faded Quote Icon */}
            <div className="hidden sm:block text-[#FFF5EB] text-[150px] lg:text-[180px] leading-none select-none shrink-0">
              <FaQuoteRight />
            </div>

          </div>

        </div>
      </Container>
    </section>
  )
}

export default ServeSection
