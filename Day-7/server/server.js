import express from 'express'
import app from './src/app.js'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './src/config/db.js'

connectDB()

app.listen(8000, ()=>{
    console.log("app is listening")
})