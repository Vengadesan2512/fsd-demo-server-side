import express from 'express'
import { addNewNotes, deleteNote, editNote, getAllNotes, getUserNotes } from '../controllers/notes.js';
const router = express.Router();
// get all notes
router.get("/all",async(req,res)=>{
    try {
         const notes = await getAllNotes();
        if(notes.length <=0){
            return res.status(404).json({
                error:"No content Available",
            })
        }
        res.status(200).json({data:notes})
    } catch (error) {
                 res.status(500).json({error:"internerl server error"})

    }
})
//get user nodes
router.get("/user/all",async(req,res)=>{
    try {
       const notes = await getUserNotes(req);
        if(notes.length <= 0){
                 return res.status(404).json({
                error:"No content Available",
            })
        }
         res.status(200).json({data:notes})
    } catch (error) {
                 res.status(500).json({error:"internerl server error"})

    }
})
//add new motes
router.post("/add",async(req,res)=>{
    try {
        const newNotes = await addNewNotes(req)
        if(!newNotes){
return res.status(400).json({error:"error adding new notes"});
        }
        return res.status(200).json({data:newNotes,
                                    message:"added sucessfully"
        })
    } catch (error) {
                 res.status(500).json({error:"internerl server error"})

    }
})
//edit a notes
router.put("/edit/:id",async(req,res)=>{
    try {
          const editedNote = await editNote(req)
        if(!editedNote){
return res.status(400).json({error:"error Editing notes"});
        }
        return res.status(400).json({data:editedNote,
                                    message:"edited sucessfully"
        })
    } catch (error) {
                 res.status(200).json({error:"internerl server error"})

    }
})
//delete a notes
router.delete("/delete/:id",async(req,res)=>{
    try {
        const deletedNote = await deleteNote(req);
        if(!deleteNote){
            return res.status(400).json({error:"error Deleting notes"});
        }
        return res.status(200).json({
                                    message:"Deleted sucessfully",
        })
    } catch (error) {
                 res.status(500).json({error:"internerl server error"})

    }
})
 export const notesRouter = router