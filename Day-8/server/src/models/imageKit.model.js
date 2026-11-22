import mongoose from 'mongoose'

const UserScheme=new mongoose.Schema({
    email: String,
    password: String,
    image: [String]
})
const imageModel=mongoose.model('userData', UserScheme )

export default imageModel