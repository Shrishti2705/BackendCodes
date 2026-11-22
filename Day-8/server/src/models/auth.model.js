import mongoose, { mongo } from 'mongoose'

const authSchema=new mongoose.Schema({
    email:String,
    password:String
})
const authModel=mongoose.model('authData',authSchema)
export default authModel