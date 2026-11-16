import React, { useState, useEffect } from 'react'
import Container from '../../common/Container'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AboutIndex = () => {
  const url = 'https://dummyjson.com/products'
  const addProductUrl = "https://dummyjson.com/products/add"
  const [product, setProduct] = useState([])
  const [formData, setFormData] = useState({
    productName: '',
    details: '',
    price: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setProduct(response.data?.products || [])
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForm = async () => {
    console.log(formData);
    const response = await axios.post(addProductUrl, {
      title: formData.productName,
      description: formData.details,
      price: formData.price,
    });
    console.log(response);
  };

  return (
    <div className="py-20">
      <Container>
        <div className="flex flex-col gap-4 items-start mb-10">
          <h4>Create Product</h4>

          <input 
            onChange={handleFormChange} 
            type="text" 
            name="productName" 
            placeholder="Product Name" 
            className="border" 
          />
          <input 
            onChange={handleFormChange} 
            type="text" 
            name="details" 
            placeholder="Product Details" 
            className="border" 
          />
          <input 
            onChange={handleFormChange} 
            type="number" 
            name="price" 
            placeholder="price" 
            className="border" 
          />
          <button onClick={handleForm} className="bg-primary px-8 py-3">
            Submit
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {product?.length > 0 ? (
            product?.map((item, index) => {
              return (
                <div key={index} className="bg-primary p-10">
                  <span>{item.id || <Skeleton count={1} />}</span>
                  <img 
                    src={item.images?.[0]} 
                    alt="not found" 
                    className="w-full h-40 object-contain my-3" 
                  />
                  <h3 className="text-xl font-bold">
                    {item.title || <Skeleton count={1} />}
                  </h3>
                  <p className="mt-5">
                    {item.description || <Skeleton count={1} />}
                  </p>
                  <p className="mt-3 font-bold">Price: ${item.price}</p>
                </div>
              );
            })
          ) : (
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
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
