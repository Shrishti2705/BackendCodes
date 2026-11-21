import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
const App = () => {

  const {register, reset, handleSubmit, formState:{error}}=useForm()
  
  const handleformsubmit=async(data)=>{
    console.log(data)

    const formData=new FormData()

    formData.append('name',data.name)
    formData.append('email',data.email)
 Array.from(data.images).forEach((file)=>{
    formData.append('images', file)
  })
   const res=await axios.post('http://localhost:8000/file/create', formData)
  }

 
  return (
    <div className='bg-gray-400 min-h-screen p-10 flex justify-center items-center'>
      <div className='flex justify-center items-center w-full max-w-md bg-white rounded-xl p-10 flex-col gap-5'>
        <h1 className='text-black text-2xl'>Your Form Details</h1>
        <form onSubmit={handleSubmit(handleformsubmit)} >
          <div className='flex flex-col justify-center items-center gap-2 '>
        <input  className='w-90 outline-none border border-gray-400 h-10 p-2' type="text" placeholder='name' 
        {...register("name")}
        />
        <input className='w-90 outline-none border border-gray-400 h-10 p-2' type="email" placeholder='email'
        {...register("email")} />
        <input className='w-90 outline-none border border-gray-400 h-10 p-2 cursor-pointer' type="file" multiple 
        {...register("images")}/>
        <button  className="w-90 p-4 cursor-pointer bg-blue-800 text-white" type='submit'>submit</button>
          </div>
        
       </form></div>
       
    </div>
  )
}

export default App