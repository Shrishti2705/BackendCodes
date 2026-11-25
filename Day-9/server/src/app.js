import express from 'express'
import cookieParser from 'cookie-parser'
import router from './routes/user.route.js'

const app=express()
app.use(express.json())
app.use(cookieParser())

app.use('/auth/token',router)
export default app