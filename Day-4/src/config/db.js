const mongoose=require('mongoose')


    const connectDB=async()=> {
        try {
            await mongoose.connect("mongodb+srv://0112ca221128_db_user:Tbe9RDxrCPBznm4t@orgcluster.kinurrb.mongodb.net/")
    console.log("database connected")
} catch (error) {
    console.log("database connection error:", error)
}
    }
module.exports =connectDB
