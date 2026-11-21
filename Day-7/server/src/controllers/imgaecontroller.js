import {imageDb} from '../model/image.model.js'
import sendFiles from '../../storageServer/imageKit.js'
const createimage=async(req, res)=>{
    try {
        const body=req.body
        const files=req.files
console.log(files)
     
   const result=files.map((file)=>sendFiles(file.buffer, file.originalname))

 const uploadImage=await Promise.all(result)
    const post = imageDb.create({name:body.name, image:uploadImage.url})
       res.status(200).json({message: "created successfully",data:body, post})
}  catch (error) {
        console.log("res error:",error)
    }
}

export default createimage