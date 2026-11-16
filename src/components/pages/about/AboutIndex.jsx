import React, { useState, useEffect } from 'react'
import Container from '../../common/Container'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AboutIndex = () => {
  const url = ''https://dummyjson.com/products''
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
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h1 className="text-4xl">{count}</h1>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        
        <div className="grid grid-cols-3 gap-6">
          {post.length > 0 ? (
            post?.map((item, index) => {
              if (item.id % 2 == 0) {
                return (
                  <div key={index} className="bg-primary p-10">
                    <span>{item.id || <Skeleton count={1} />}</span>
                    <h3 className="text-xl font-bold">
                      {item.title || <Skeleton count={1} />}
                    </h3>
                    <p className="mt-5">
                      {item.body || <Skeleton count={1} />}
                    </p>
                  </div>
                );
              }
            })
          ) : (
            [0,1,2,3,4,5,6,7,8].map((item, index) => (
              <div key={item} className="bg-primary p-10">
                <span>
                  <Skeleton count={1} />
                </span>
                <h3 className="text-xl font-bold">
                  <Skeleton count={1} />
                </h3>
                <p className="mt-5">
                  {" "}
                  <Skeleton count={1} />{" "}
                </p>
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  )
}

export default AboutIndex
