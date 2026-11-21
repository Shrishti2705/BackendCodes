import mongoose from 'mongoose'


const connectDB=async()=>{
try {
   await mongoose.connect(process.env.MONGO_URI)
   console.log("db is connected")

} catch (error) {
    console.log(error, "db is not connected")
}
}
export default connectDB