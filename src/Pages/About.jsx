import React, { useState } from 'react'
import Banner from '../components/UI/Banner'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import *as yup from 'yup'

const schema=yup.object().shape({
  user:yup.string().min (4,"min 4 is required").required('this is required')
})

function  About() {
    const[username,setusername]=useState("")
    const submited =()=>{
    if(username.trim().length<=0){
    alert("no data")
    }
    else{
    alert("fired")
   }
  }

  return (
 <div className='mt-44 w-10/12 mx-auto'>
      <div className='flex flex-col gap-4'>
         <input type='text' onChange={(e)=>{
          setusername(e.target.value)
         }} placeholder='enter your name' className='border py-3 px-4 placeholder:capitalize' />
         
         <button onClick={()=>{
          submited()
         }} className='w-fit h-fit border-2 bg-transparent px-10 py-4'>Submit</button>
      </div>
      {/* formik*/}

      <Formik
        initialValues={{
          user:""
        }}
        validationSchema={schema}
        onSubmit={(values)=>{
          console.log(values)
        }}
        >
          
        {({handleSubmit}) => {
          return <Form onSubmit={handleSubmit}>
            <div>
              <label>username</label>
              <Field name='user' placeholder='enter user' className='border py-3 px-4' />
              <ErrorMessage name='user' component={'div'} />
            </div>
            <button type='submit'>Submit</button>
          </Form>

        }}
      </Formik>
 </div>
  )
}

export default About