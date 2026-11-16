const express=require('express')
const router=require('../src/routes/file.route')
const app=express()

 app.use(express.json())
 app.use('/file', router)
module.exports=app