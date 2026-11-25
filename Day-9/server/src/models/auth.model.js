import mongoose from 'mongoose'

const UserSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
      type: String,
        required: true,  
    },
    password:{
         type: String,
        required: true, 
    },
    refreshToken:{
        type:String,
        default:null
    }
})

const userModel=mongoose.model('User', UserSchema)

export default userModel