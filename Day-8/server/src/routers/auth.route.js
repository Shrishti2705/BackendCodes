import {register, login} from "../controllers/auth.controller.js";
import authMiddleware from '../middleware/auth.middleware.js'
import express from 'express';
const authrouter=express.Router()

authrouter.post('/register',register)
authrouter.get('/login' ,authMiddleware, login )
export default authrouter