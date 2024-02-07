import { Notes } from "../models/notes.js";

export function getAllNotes(req){
    return Notes.find().populate("user")
}
// -----
export function getUserNotes(req){
return Notes.find({user:req.user})
.populate("user","name");
}
// ---------
export function addNewNotes(req){
    return new Notes({
        ...req.body,
        user:req.user,
    }).save();
}
// -------
export function editNote(req){
    return Notes.findOneAndUpdate(
        {_id:req.params.id},
        {$set:req.body},
        {new:true}
    );
}
// ------
export function deleteNote(req){
    return Notes.findOneAndDelete({_id: req.params.id})
}