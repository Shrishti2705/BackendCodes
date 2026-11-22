
import imageModel from '../models/imageKit.model.js'
import sendFiles from '../../image.server.js'




const imagekit=async(req, res)=>{
    try{
const {email, password}=req.body
const files=req.files
console.log(files)
const result=files.map((file)=>sendFiles(file.buffer, file.originalname))

const uploadImage=await Promise.all(result)
const imageUrl=uploadImage.map((file)=>file.url)

const user=await imageModel.create({email, password, image: imageUrl})
return res.status(200).json({message:"store data", data:user})
}catch(error){
    console.log("data not created",error)
}
}
export default imagekit