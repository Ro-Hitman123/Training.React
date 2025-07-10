import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Toolbar() {
 const location = useLocation()
  const nav_items=[
  {title:"Home",path:'/'},
  {title:"About",path:'/about'},
  {title:"Contact",path:'/##'},
  {title:"Blog",path:'/##'},
  {title:"Event",path:'/##'},


  ]
  return (
    <div className='flex  justify-between px-10 z-1 fixed top-10 left-0 right-0 mx-auto w-11/12 px-10 py-4 shadow-2xl bg-blue-500'>
      <div className='font-bold text-xl'>Training</div>
      <div className='flex gap-6'>
        {
          nav_items.map((val,i)=>{
            return <div>
             <Link key={i} to={val.path} className={`capitalize ${location.pathname==val.path?"text-red-600":"text-white"}`}>{val.title}</Link>
             <div className={`h-px bg-white ${location.pathname==val.path?"w-full":"w-0"} transition-all duration-700 delay-75 ease-in-out`}></div>
             </div>
          })
        }
        


      </div>
    </div>
  )
}

export default Toolbar