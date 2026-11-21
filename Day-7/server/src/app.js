import express, { Router } from 'express'
import router from '../src/routes/routes.js'
import cors from 'cors'
const app=express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use('/file',router)
export default app