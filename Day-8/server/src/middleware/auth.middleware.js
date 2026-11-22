import jwt from 'jsonwebtoken'
import authModel from '../models/auth.model.js'
import dotenv from 'dotenv'
dotenv.config()


const authMiddleware=async(req, res, next)=>{
    try {
         const token= req.headers.authorization
     if(!token){
        return res.status(401).json({message: "token required"})
     }
const data=jwt.verify(token , process.env.JWT_SECRET_KEY)
console.log(data)
const user=await authModel.findById(data.userId)
console.log(user)

if(!user){
     return res.status(401).json({message: "user not found"}) 
}  

req.user=user
next()
    } catch (error) {
      console.log("middleware error", error)  
    }
 
    
}
export default authMiddleware