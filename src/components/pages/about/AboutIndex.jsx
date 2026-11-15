import React from 'react'
import Container from '../../components/common/Container'
import axios from 'axios';

const AboutIndex = () => {

  const url = 'https://jsonplaceholder.typicode.com/posts'

  const fetchData = async () => {
    const [count, setCount] = useState(0)
    const [post, setPost] = useState([])

  try {
    const response = await axios.get(url);
    setPost (response.data);
  } catch (error) {
    console.error(error);
  }
}
fetchData()


  return (
    <div className='py-20'>
      <Container>
        
      </Container>
    </div>
  )
}

export default AboutIndex

