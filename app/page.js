"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const page = () => {
  const [images, setimages] = useState([])
  useEffect(() => {
    getImages
  }, [])
  
  const getImages = async () => {
    try {
      const api = await axios.get("https://picsum.photos/v2/list")
      const data = api.data
      setimages(data);
      console.log(images)
    } catch (error) {
      console.error("Error Faching Images..!")
    }
  }
  return (
    <>
      <h1 className='text-center mt-5'>Click <b>Get Image</b> Button To Genrate Random Images</h1>
      <div className='flex items-center justify-center'>
        <button onClick={getImages} className='rounded bg-green-400 text-white mt-5 p-2'>Get Image</button>
      </div>
      <div className='p-10'>
        {images.map((elem,i)=>{
          return <img 
          key={i}
          src={elem.download_url}
          height={300}
          width={300}
          className='m-10 rounded-lg inline-block'
          />
        })}
      </div>
    </>
  )
}

export default page