import { upload } from '../config/multer.js'
import imagekit from '../controllers/imagekit.controller.js'

import express from 'express'

const router=express.Router()

router.post('/create', upload.array('image',5), imagekit)

export default router