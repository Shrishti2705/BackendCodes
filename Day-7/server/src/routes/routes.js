import express from 'express'
import {upload} from '../config/multer.js'
import createimage from '../controllers/imgaecontroller.js'
const router=express.Router()

router.post('/create', upload.array('images',5),createimage)

export default router