import React from 'react'
import Container from '../../common/Container'
import Image from '../../ui/image'
import Anchor from '../../ui/anchor'
import { FaRegClock, FaArrowRightLong } from "react-icons/fa6"
import { FiMapPin } from "react-icons/fi"
import sermonImg from '../../../assets/sermon.jpg'


const SermonsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-[554px] mx-auto mb-16 px-4 md:px-0">
          <span className="font-robotoCondensed font-normal text-base uppercase text-[#161722] tracking-wider block">
            UPCOMING SERMONS
          </span>
          <h2 className="font-robotoCondensed font-bold text-3xl sm:text-4xl lg:text-5xl uppercase text-[#161722] mt-4 leading-tight">
            JOIN US AND BECOME PART OF SOMETHING GREAT
          </h2>
        </div>

        {/* Main Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#FFF5EB] mx-4 md:mx-0">
          
          {/* Left Side Content (5 Columns) */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              {/* Top Row: Label & Date */}
              <div className="flex justify-between items-start">
                <span className="font-robotoCondensed font-bold text-xs uppercase tracking-widest text-[#DC9853]">
                  UPCOMING EVENT
                </span>
                <div className="text-right text-[#161722] font-robotoCondensed leading-none">
                  <span className="block font-bold text-2xl">20</span>
                  <span className="block font-normal text-base uppercase mt-1">JULY</span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-robotoCondensed font-bold text-2xl sm:text-[28px] uppercase text-[#161722] mt-4 leading-8 max-w-[230px]">
                WATCH AND LISTEN TO OUR SERMONS
              </h3>
              <p className="font-robotoCondensed font-normal text-base text-[#161722]/80 mt-4 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </p>

              {/* Time & Location Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 text-[#161722]">
                  <FaRegClock className="text-xl mt-1 shrink-0" />
                  <div className="font-robotoCondensed text-base leading-6">
                    <p>Friday 23:39 IST</p>
                    <p>Saturday 11:20 ISD</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-[#161722]">
                  <FiMapPin className="text-xl mt-1 shrink-0" />
                  <div className="font-robotoCondensed text-base leading-6">
                    <p>No 233 Main St. New York,</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Register Button */}
            <div className="mt-8">
              <button className="bg-[#161722] text-primary px-12 py-5 uppercase font-normal text-base rounded-xl font-robotoCondensed hover:bg-primary hover:text-[#161722] transition-all cursor-pointer">
                REGISTER
              </button>
            </div>
          </div>

          {/* Right Side Image (7 Columns) */}
          <div className="lg:col-span-7 min-h-[350px] lg:min-h-full">
            <Image 
              src={sermonImg} 
              alt="Upcoming Sermon Event" 
              className="w-full h-full object-cover" 
            />
          </div>

        </div>

        {/* Bottom Right Link */}
        <div className="flex justify-end mt-12 px-4 md:px-0">
          <Anchor 
            href="/sermons" 
            className="inline-flex items-center gap-3 font-robotoCondensed font-normal text-2xl text-[#161722] hover:text-[#DC9853] transition-all"
          >
            <span>View all Sermons</span>
            <FaArrowRightLong />
          </Anchor>
        </div>

      </Container>
    </section>
  )
}

export default SermonsSection
