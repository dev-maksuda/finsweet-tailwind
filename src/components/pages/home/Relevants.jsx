import React from 'react'
import Container from '../../common/Container'
import { FaHandsHoldingCircle, FaTowerBroadcast, FaHandHoldingHeart } from "react-icons/fa6"

const relevantData = [
  {
    id: 1,
    icon: <FaHandsHoldingCircle />,
    title: "ABOUT US",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    icon: <FaTowerBroadcast />,
    title: "GET INVOLVED",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    icon: <FaHandHoldingHeart />,
    title: "GIVING BACK",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]

const Relevents = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        
        {/*Section Header */}
        <div className="text-center mb-16">
          <span className="font-robotoCondensed font-normal text-base uppercase text-[#161722] tracking-wider block">
            SUB-HEADLINE
          </span>
          <h2 className="font-robotoCondensed font-bold text-3xl sm:text-4xl lg:text-5xl uppercase text-[#161722] mt-3">
            A CHURCH THAT'S RELEVANT
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
          {relevantData.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#FFF5EB] p-12 lg:p-16 border-b-[16px] border-primary transition-transform duration-300 hover:-translate-y-1"
            >
              {/*Icon*/}
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-[#161722] text-xl mb-6">
                {item.icon}
              </div>

              {/*Title */}
              <h3 className="font-robotoCondensed font-bold text-2xl sm:text-[32px] uppercase text-[#161722] mb-4">
                {item.title}
              </h3>

              {/*Description */}
              <p className="font-robotoCondensed font-normal text-base text-[#161722]/80 leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Relevents
