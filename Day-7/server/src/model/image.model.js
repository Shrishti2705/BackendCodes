import mongoose, { model } from "mongoose";

const imageSchema=new mongoose.Schema({
    name: String,
    email: String, 
    image: String
})

export const imageDb=mongoose.model('imagebOX', imageSchema)