import express from 'express'
import router from './routers/image.route.js';
import authrouter from './routers/auth.route.js'
const app=express()
app.use(express.json())
app.use('/image', router)
app.use('/createUser', authrouter)
export default app;