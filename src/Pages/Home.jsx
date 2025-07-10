import React from 'react'
import Banner from '../components/UI/Banner'

function Home () {
  const transfer=()=>{
    alert("here")
  }
  return (
    <div>
      <Banner title=" my page" subtitle="It's me Kritagya Khanal"
      description="it's a descripyion" />
      <button onClick={()=>{
        transfer()
      }}>
        About us
        </button>

    </div>
  )
}

export default Home
