const Notes=require("../models/db")

const createNotes=async(req,res)=>{
    try {
         const {title, description}=req.body

   const newNotes=await Notes.create({title, description})
   res.send({status:201, message:"data created", data:newNotes})
    } catch (error) {
        console.log("notes is not created successfully", error)
    }
  

}

const getAllNotes=async(req,res)=>{
    try {
        const notes=await Notes.find()
         res.send({status:200, message:"data shown" ,data:notes})
    } catch (error) {
        console.log("notes not shown", error)
    }
}


const getNote=async(req,res)=>{
    try {
        const noteId=req.params.id
        const note=await Notes.findById(noteId)
          res.send({status:200, message:"data shown" ,data:note})
    } catch (error) {
             console.log("notes not shown", error)
    }
}


const getUpdateById=async(req,res)=>{

    try {
         const Id=req.params.id
    const body=req.body

    const updateNote=await Notes.findByIdAndUpdate(Id, body, {new:true})
       res.send({status:200, message:"data updated" ,data:updateNote}) 
    } catch (error) {
           console.log("notes not shown", error) 
    }
  
}

const deletedNote=async(req,res)=>{
    try {
        const id=req.params.id
const deletedData=await Notes.findByIdAndDelete(id)
 res.send({status:200, message:"data updated" ,data: deletedData}) 
    } catch (error) {
          console.log("notes not shown", error) 
    }

}


const updateNote=async(req, res)=>{
    try {
        const id=req.params.id
        const updateData=await Notes.findByIdAndUpdate(id)
        res.send({status:200, message:"data updated" ,data: updateData})
    } catch (error) {
         console.log("notes not shown", error) 
    }
}
module.exports={createNotes, getAllNotes,getNote,getUpdateById,deletedNote,updateNote}