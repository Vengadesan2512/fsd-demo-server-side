import { ObjectId } from 'bson';
import { Db } from 'mongodb';
import mongoose from 'mongoose'

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    user:{
        type:ObjectId,
        ref:"user",
    }
});

const Notes = mongoose.model("notes",noteSchema)
export{Notes};