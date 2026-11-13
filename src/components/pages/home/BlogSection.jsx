import React from 'react'
import Container from '../../common/container'
import Anchor from '../../ui/anchor'

const blogData = [
  {
    id: 1,
    category: "RELATIONSHIP",
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021"
  },
  {
    id: 2,
    category: "RELATIONSHIP",
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021"
  },
  {
    id: 3,
    category: "RELATIONSHIP",
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021"
  },
  {
    id: 4,
    category: "RELATIONSHIP",
    title: "WATCH AND LISTEN TO OUR SERMONS",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    author: "By Mathew Johnson",
    date: "Tuesday 13 May, 2021"
  }
]

const BlogSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        
        {/* Section Header */}
        <div className="text-center mb-16 px-4 md:px-0">
          <span className="font-robotoCondensed font-normal text-base uppercase text-[#161722] tracking-wider block">
            READ OUR BLOG
          </span>
          <h2 className="font-robotoCondensed font-bold text-3xl sm:text-4xl lg:text-5xl uppercase text-[#161722] mt-4">
            SHARE, INSPIRE, INNOVATE
          </h2>
        </div>

        {/* 4 Blog Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0">
          {blogData.map((item, index) => (
            <Anchor 
              href="/blog"
              key={item.id} 
              className={`bg-[#FFF5EB] p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 border-b-[16px] ${
                index === 0 
                  ? "border-primary" 
                  : "border-transparent hover:border-primary"
              }`}
            >
              <div>
                <span className="font-robotoCondensed font-bold text-xs uppercase tracking-widest text-[#DC9853] block">
                  {item.category}
                </span>

                <h3 className="font-robotoCondensed font-bold text-2xl uppercase text-[#161722] mt-4 mb-4 leading-7">
                  {item.title}
                </h3>

                <p className="font-robotoCondensed font-normal text-base text-[#161722]/80 leading-6">
                  {item.description}
                </p>
              </div>

              <div className="mt-10 font-robotoCondensed text-base text-[#161722]">
                <p className="font-normal text-lg">{item.author}</p>
                <p className="font-normal text-base text-[#161722]/80">{item.date}</p>
              </div>
            </Anchor>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default BlogSection
