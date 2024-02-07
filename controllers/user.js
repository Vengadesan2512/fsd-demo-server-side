import { User } from "../models/user.js";

export function getUserByEmail(req){
    return User.findOne({
        email:req.body.email,
    })
}