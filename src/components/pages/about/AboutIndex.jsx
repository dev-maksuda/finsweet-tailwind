import React from 'react'
import Container from '../../components/common/Container'
import axios from 'axios';

const AboutIndex = () => {

  const url = 'https://jsonplaceholder.typicode.com/posts'
  
  const fetchData = async () => {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}


  return (
    <div className='py-20'>
      <Container>
        
      </Container>
    </div>
  )
}

export default AboutIndex

