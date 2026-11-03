const express=require('express')
const connectDB = require('./config/db')
const notesrouter =require('./routers/notes.routes')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))
connectDB()

app.use('/notes', notesrouter)

module.exports=app