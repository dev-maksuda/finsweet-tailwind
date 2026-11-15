import React, { useState, useEffect } from 'react'
import Container from '../../common/Container'
import axios from 'axios'

const AboutIndex = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const [count, setCount] = useState(0)
  const [post, setPost] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setPost(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [count])

  return (
    <div className="py-20">
      <Container>
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => setCount(count + 1)} 
            className="bg-primary px-6 py-2 rounded font-bold cursor-pointer"
          >
            Increment
          </button>
          <h1 className="text-4xl font-bold">{count}</h1>
          <button 
            onClick={() => setCount(count - 1)} 
            className="bg-primary px-6 py-2 rounded font-bold cursor-pointer"
          >
            Decrement
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {post.map((item, index) => (
            <div key={index} className="bg-primary p-10 rounded-xl">
              <span className="font-bold">{item.id}</span>
              <h3 className="text-xl font-bold mt-2">{item.title}</h3>
              <p className="mt-5">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AboutIndex
