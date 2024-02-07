import mongoose from "mongoose";
export function connectDB(){
    const params={useNewUrlParser:true,
                useUnifiedTopology:true, };
        try {
            mongoose.connect(process.env.MONGO_URL);
            console.log("database Connected");
        } catch (error) {
            console.log("connection error");
        }        
}