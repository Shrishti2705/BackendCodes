const express=require('express')
const upload = require('../config/multer')

const router=express.Router()

router.post('/',upload.single('image'),(req,res)=>{
    try {
        const body=req.body
        const file=req.file
        console.log(body)
        console.log(file)
        res.send({status: 200, message:"post successfully"})
        console.log("succesffuly")
    } catch (error) {
        res.send({status:500, message:"internal server error"})
        console.log(error)
    }
})
module.exports=router