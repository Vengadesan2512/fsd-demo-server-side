import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
        name:{
            type:String,
            requireed:true,
            trim:true,
            manlenght:32,
        },
         email:{
            type:String,
            requireed:true,
            trim:true,
            unique:true,
        },
         password:{
            type:String,
            requireed:true,
            trim:true,
            manlenght:32,
        },
})

const User = mongoose.model("user",userSchema);
export {User}
