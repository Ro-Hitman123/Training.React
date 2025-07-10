import React from 'react'
import { useState } from 'react'
function PageNotFound() {
  let a=10
  const changed=()=>{
    a=a+1
  }

  const[b,setb]=useState(0)
  return (
    <div>
      {a}
      {console.log(a)}
      <button onClick={()=>changed()}>Here</button>
      
      {b}
      <div onClick={()=>{
      setb(b+1)
      }}>change b</div>
      </div>
  )
}

export default PageNotFound