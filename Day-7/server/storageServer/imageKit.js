import imagekit from 'imagekit'
import dotenv from 'dotenv'
dotenv.config()
const storageInstance=new imagekit({
    urlEndpoint: process.env.URL_endpoint,
    privateKey: process.env.Private_key,
    publicKey: process.env.Public_key
})


const sendFiles=async(file, fileName)=>{
    const obj={
        file,
        fileName, 
        folder: 'cohort1'
    }
    return await storageInstance.upload(obj)
}
export default sendFiles