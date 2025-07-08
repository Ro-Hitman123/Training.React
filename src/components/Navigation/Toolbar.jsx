import React from 'react'
import { Link } from 'react-router-dom'

function Toolbar() {
  return (
    <div className='flex justify-between px-10 py-10 shadow-2xl'>
      <div className='font-bold text-xl'>Training</div>
      <div className='flex gap-6'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>


      </div>
    </div>
  )
}

export default Toolbar