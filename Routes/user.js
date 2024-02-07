import express from 'express'
import bcrypt from 'bcrypt'
import { getUserByEmail } from '../controllers/user.js';
import { generateToken } from '../Auth/Auth.js';
import { User } from '../models/user.js';

const router = express.Router();
router.post("/login",async(req,res)=>{
    try {
        //user exit
        const user = await getUserByEmail(req)
        if(!user){
            return res.status(400).json({error:"no user found"})
        }
        //validating password
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        )
         if(!validPassword){
            return res.status(400).json({error:"Invalid password"})
        }
        //generate token
        const token = generateToken(user._id)
        res.status(200).json({data:"Logged in sucessfully",token})
    } catch (error) {
        res.status(500).json({error:"internerl server error"})
    }
});

router.post("/signup",async(req,res)=>{
    try {
        //already user excit
        let  user =  await getUserByEmail(req);
        if(user){
            return res.status(400).json({error:"user already excit"})
        }
        //generate hassed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        user = await new User({
            ...req.body,
            password: hashedPassword,
        }).save();
        const token = generateToken(user._id);
        res.status(201).json({data:"sucessfullu registered",token})
        
    } catch (error) {
        console.log(error);
         res.status(500).json({error:"internerl server error"})
    }
});
export const userRouter=router;

