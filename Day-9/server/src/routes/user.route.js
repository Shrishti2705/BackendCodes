import userModel from '../models/auth.model.js'
import {Router} from 'express'
import bcrypt from 'bcrypt'
import {generateToken ,verifyToken,verifyRefreshToken} from '../utils/auth.js'


const router=Router()

router.post("/register",async(req , res)=>{
    const {name, email, password}= req.body

    const isUserExist=await userModel.findOne({email})
    if(isUserExist){
        return res.status(400).json({
            message:"user already exists",
        })
    }

    const user=await userModel.create({name, email, password: await bcrypt.hash(password, 12)})

    const {accessToken, refreshToken}=generateToken({userId: user._id})
    console.log(accessToken)
    console.log(refreshToken)

    res.cookie("refreshToken", refreshToken,{
        httpOnly:true
    })

     user.refreshToken=refreshToken
      await  user.save()
    
      return res.status(200).json({message:"user registered successfully", accessToken})
})

router.get("/verify", async(req,res)=>{
    const accessToken=req.headers.authorization?.split(" ")[1]
if(!accessToken){
    return res.status(400).json({message: "accesstoken required"})
}
    const decoded=verifyToken(accessToken)
    
    const user=await userModel.findById(decoded.id)
   

     res.status(200).json({message:"get data successfully"})
})






router.post('/refresh',async(req,res)=>{


 const refreshToken=req.cookies.refreshToken;

 const decoded=verifyRefreshToken(refreshToken)
 const user=await userModel.findById(decoded.id)
    if(refreshToken!==user.refreshToken){
        user.refreshToken=null
        user.save()

      return  res.status(400).json({message:"mismatch refreshToken"})
    }

    const {accessToken, refreshToken:newRefreshToken}=generateToken({userId: user._id})

    res.cookie('refreshToken', newRefreshToken,{httpOnly: true})

    user.refreshToken=newRefreshToken
    user.save()

    res.status(200).json({message:"new refreshToken generated", accessToken})
})


export default router