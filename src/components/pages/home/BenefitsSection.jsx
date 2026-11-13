import React from 'react'
import Container from '../../common/container'
import Image from '../../ui/image'

import benefitImg1 from '../../../assets/benefitImg1.png'
import benefitImg2 from '../../../assets/benefitImg2.png'
import benefitImg3 from '../../../assets/benefitImg3.png'
import benefitImg4 from '../../../assets/benefitImg4.png'

const benefitsData = [
  { id: 1, image: benefitImg1, alt: "Benefit Card 1" },
  { id: 2, image: benefitImg2, alt: "Benefit Card 2" },
  { id: 3, image: benefitImg3, alt: "Benefit Card 3" },
  { id: 4, image: benefitImg4, alt: "Benefit Card 4" }
]

const BenefitsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F5F2F0]">
      <Container>
        
        {/* Section Header */}
        <div className="text-center max-w-[440px] mx-auto mb-16 px-4 md:px-0">
          <span className="font-robotoCondensed font-normal text-base uppercase text-[#161722] tracking-wider block">
            WATCH AND LISTEN
          </span>
          <h2 className="font-robotoCondensed font-bold text-3xl sm:text-4xl lg:text-5xl uppercase text-[#161722] mt-4 leading-tight">
            THE BENEFITS OF JOINING OUR CHURCH
          </h2>
        </div>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
          {benefitsData.map((item) => (
            <div 
              key={item.id} 
              className="h-[384px] overflow-hidden group cursor-pointer"
            >
              <Image 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default BenefitsSection
