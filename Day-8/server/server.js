import app from "./src/app.js";
import connectDB from './src/config/db.js'
import dotenv from 'dotenv'
dotenv.config()

await connectDB()
app.listen(8000, ()=>{
    console.log("server is running")
})

