import mongoose from "mongoose"



const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.mongoDB_URI) 
       console.log("mongodb connected successfully")
    } catch (error) {
        console.log( "mongodb connection error", error)
    }
}

export default connectDB