import ImageKit from "imagekit";
import dotenv from 'dotenv'
dotenv.config()
const storageInstance=new ImageKit({
   urlEndpoint:process.env.URL_ENDPOINT,
   publicKey:process.env.PUBLIC_KEY,
   privateKey: process.env.PRIVATE_KEY
})

const sendFiles=async(file , fileName)=>{
    const obj={
        file,
        fileName,
        folder: "shrishti_image"
    }

    return await storageInstance.upload(obj)
}

export default sendFiles