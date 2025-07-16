import React, { useEffect, useState } from 'react'
import Banner from '../components/UI/Banner'
import Cards from '../components/UI/cards'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import GetData from '../HOC/Custome/GetData'

function Home() {
  const carddata = [
    {
      title: "card 1",
      description: "Culpa enim duis mollit incididunt esse eiusmod anim laborum anim consequat exercitation. Id qui culpa veniam irure esse pariatur do ullamco nulla laboris do. Id mollit laboris deserunt id deserunt sunt incididunt sunt fugiat.",

      image: "https://images.unsplash.com/photo-1478059299873-f047d8c5fe1a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "card 2",
      description: "Culpa enim duis mollit incididunt esse eiusmod anim laborum anim consequat exercitation. Id qui culpa veniam irure esse pariatur do ullamco nulla laboris do. Id mollit laboris deserunt id deserunt sunt incididunt sunt fugiat.",

      image: "https://images.unsplash.com/photo-1515310787031-25ac2d68610d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW91bnRhaW58ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "card 3",
      description: "Culpa enim duis mollit incididunt esse eiusmod anim laborum anim consequat exercitation. Id qui culpa veniam irure esse pariatur do ullamco nulla laboris do. Id mollit laboris deserunt id deserunt sunt incididunt sunt fugiat.",

      image: "https://media.istockphoto.com/id/1292886304/photo/sacred-mount-kailas-in-tibet-himalayas-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=h2d_od4o3nXrIV5-rEM04IEzk3w2c04iIWamJ0CCEuk="
    },
  ]

  /*const getData = () => {
    try {
      axios.get('https://gastro-backend.e-aribt.com/api/services?order=ASC&page=1&take=10').then(res => {
        console.log(res.data.data)
        setData([...res.data.data])
      }).catch(err => {
        console.log(err)
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData();
  }, [])*/
  const data=GetData('features');

  const navigate = useNavigate()
  const transfer =() => {
    navigate('/About')
  }

  return (
    <div className='pb-10'>
      <Banner title=" Home" subtitle="It's a home"
        description="it's a description" />

      <div className='grid grid-cols-3 gap-6 w-10/12 mx-auto mt-10'>
        {
          data.map((val, i) => {
            return <Cards title={val.title}
              description={val.summary}
              image={val?.coverImage?.url} key={i} />

          })

        }
      </div>
    </div>
  )
}


export default Home