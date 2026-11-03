const mongoose=require('mongoose')

const noteSchema=new mongoose.Schema({
    title:String,
    description:String
})

const NotesModel=mongoose.model('Notes', noteSchema)
module.exports=NotesModel