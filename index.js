import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './db.js';
import { userRouter } from './Routes/user.js';
import { notesRouter } from './Routes/notes.js';
import { isAuthendicated } from './Auth/Auth.js';
import { Db } from 'mongodb';
//configutr
dotenv.config();
const PORT = process.env.PORT;
//initial a server
const app = express();
//middleware
app.use(express.json());
app.use(cors());
connectDB()
//initialling the routes
app.use("/app/user",userRouter)
app.use("/app/notes",isAuthendicated,notesRouter)
app.listen(PORT,()=>console.log(`server running in ${PORT}`));



