import authModel from '../models/auth.model.js'
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'




const register=async(req ,res)=>{
    try {
       const {email, password}=req.body
       const hashpassword=await bcrypt.hash(password, 10)
    const user=await authModel.create({email, password: hashpassword}) 
    const token=jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET_KEY
    )

    return res.status(200).json({message: "user created successfully", data: user, token})
    } catch (error) {
        res.status(500).json({message: error})
        console.log("user not created " , error)
    }
    
}

const login=async(req,res)=>{
    try {
          const {email, password}=req.body
    
    const user=await authModel.findOne({email})
     if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
  const comparePassword=await bcrypt.compare(password, user.password)
    return res.status(201).json({message: "user found"})
    } catch (error) {
        console.log("internal server error", error)
    }
  
}

export  {register,login}