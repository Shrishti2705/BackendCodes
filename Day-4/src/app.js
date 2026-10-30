const express=require ('express')
const connectDB=require('./config/db.js')
const NotesModel = require('./Models/notes.model.js')
const app=express()
app.use(express.json())


connectDB()
app.post('/create', async(req,res)=>{
    const {title, description}=req.body
      
    const newNotes=await NotesModel.create({
        title,description
    })
    res.send({status:true, message: "successful created"})
    console.log(title, description)
})


module.exports=app