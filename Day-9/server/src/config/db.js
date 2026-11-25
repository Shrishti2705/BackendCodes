import mongoose from 'mongoose'
import config from './config.js'
const connectDB=async()=>{
    try {
         await mongoose.connect(config.MongoDB_URI)
         console.log("mongodb connected successfully")
    } catch (error) {
        console.log("database connection failed", error)
    }
   

}

export default connectDB