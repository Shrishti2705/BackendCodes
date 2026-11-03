import { useEffect, useState } from 'react'
import axios from 'axios'
import { useEffectEvent } from 'react'
import NoteCard from './components/NoteCard'

function App() {
 const [formValues, setFormValues]=useState({title:"", description:"" })
const [allNotes, setAllNotes]=useState([])
const [editId, setEditId]=useState(null)

  const handlechange=(e)=>{
    setFormValues((prev)=>({...prev,[e.target.name]:e.target.value}))
  }


 
  const handleSubmit=async(e)=>{
    e.preventDefault()

    if(editId){
      try{
const res=await axios.put(`http://localhost:5000/notes/${editId}`,formValues)

getAllNotes()
    } catch (error) {
      console.log("error in getting notes", error)
    }
  

    }else{
    const res=await axios.post(`http://localhost:5000/notes/create/`,formValues)
    }
    getAllNotes()

     setEditId(null)
    setFormValues({
      title:"", description:""
    })
 
  setEditId(null)
  }

  const handleDelete=async(id)=>{
    try{
    const res=await axios.delete(`http://localhost:5000/notes/${id}`)
    getAllNotes()
    } catch (error) {
      console.log("error in getting notes", error)
    }
  }


  const getAllNotes=async()=>{
    try {
        const res=await axios.get("http://localhost:5000/notes/")
        setAllNotes(res.data.data)
    console.log(res)
    } catch (error) {
      console.log("error in getting notes", error)
    }
  
  }

  useEffect(()=>{
getAllNotes()
  },[])


  const getUpdateData=async(note)=>{
setEditId(note._id)
setFormValues({
  title:note.title,
  description:note.description
})
  }

  return (
    <div className='p-8 flex flex-col gap-8 justify-center items-center'>
      <h1 className='text-2xl'>Notes-API-Integration</h1>
      <form className='flex flex-col gap-4 w-80 border border-white' onSubmit={handleSubmit}>
          <input className='outline-none p-3 h-10' type="text" name="title" placeholder='Title' onChange={handlechange} value={formValues.title}/>
          <input className='outline-none p-3 h-10' type="text" name='description' placeholder='Description' onChange={handlechange} value={formValues.description}/>
          <button className='cursor-pointer bg-blue-800 text-white text-xl p-3'>Create Note</button>
      </form>

<div className='flex flex-row w-full flex-wrap gap-3'>
 {allNotes.map((val)=>{
        return  <NoteCard key={val._id} note={val} ondelete={handleDelete} getUpdateData={getUpdateData}/>
      })}
</div>
     
    </div>
  )
}

export default App
