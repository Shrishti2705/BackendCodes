const mongoose=require('mongoose')
const { title } = require('process')

const notesSchema=new mongoose.Schema({
    title:String,
    description:String
})

module.exports= NotesModel=mongoose.model('notes', notesSchema)

