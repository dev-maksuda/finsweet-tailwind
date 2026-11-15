import React, { useState, useEffect } from 'react'
import Container from '../../components/common/Container'
import axios from 'axios';

const AboutIndex = () => {

  const url = 'https://typicode.com'
  const [count, setCount] = useState(0)
  const [post, setPost] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, [count])

  console.log(post)

  return (
    <div className='py-20'>
      <Container>
        
      </Container>
    </div>
  )
}

export default AboutIndex
