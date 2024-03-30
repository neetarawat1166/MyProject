import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    number:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

export const usermodel = mongoose.model("user",userSchema) ;