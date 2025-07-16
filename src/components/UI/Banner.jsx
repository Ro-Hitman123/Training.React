import React from 'react'
import { useLocation } from 'react-router-dom'

function Banner({title,subtitle,description}) {
    const location = useLocation()
    console.log(location)
  return (
    <div>
    <div className='bg-red-500 h-screen'>
    <div className='h-full relative'>
      <img src="https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?cs=srgb&dl=pexels-lastly-772803.jpg&fm=jpg" className='h-full w-full object-cover' />
      <div className='absolute top-0  w-full h-full flex justify-center items-center flex-col left-0 right-0 bg-black/30 '>
      <div>{title}</div>
      <div>{subtitle}</div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Banner