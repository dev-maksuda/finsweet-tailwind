import React from 'react'
import Container from '../../common/Container'
import bannerBg from '../../../assets/banner.png'

const Banner = () => {
  return (
    <section 
      className="py-24 lg:py-32 bg-cover bg-center bg-no-repeat relative text-white"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <Container>
        <div className="max-w-[592px] px-4 md:px-0">
          
          <span className="font-robotoCondensed font-bold text-base uppercase tracking-wider text-white block">
            Welcome to our church
          </span>

          <h1 className="font-robotoCondensed font-bold text-4xl sm:text-5xl lg:text-[64px] uppercase leading-tight lg:leading-[82px] text-white mt-4 mb-8">
            Become a part of <br /> our community
          </h1>

          <div>
            <button className="bg-primary px-12 py-5 uppercase font-normal text-base text-[#1C1D28] rounded-xl font-robotoCondensed hover:bg-white transition-all cursor-pointer">
              Learn More
            </button>
          </div>

          <div className="flex items-start gap-3 mt-16">
            <span className="w-[18px] h-[2px] bg-primary block mt-3 shrink-0"></span>
            <p className="font-robotoCondensed font-normal text-base text-white/90 max-w-[308px] leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
          </div>

        </div>
      </Container>
    </section>
  )
}

export default Banner
