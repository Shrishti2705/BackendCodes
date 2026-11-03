const mongoose=require('mongoose')

const connectDB=async()=>{
try {
    await mongoose.connect("mongodb://localhost:27017/mydatabasePractice")
    console.log("Database connected successfully")
} catch (error) {
    console.log("database is not connected", error)
}
}

module.exports=connectDB