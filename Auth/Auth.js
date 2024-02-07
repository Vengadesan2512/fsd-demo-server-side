import jwt from 'jsonwebtoken'
export  const generateToken = (id)=>{
    return jwt.sign({id},process.env.SECRETE_KEY)
}

//middleware
export const isAuthendicated = async(req,res,next)=>{
    if(req.headers["x-auth-token"]){
        try {
            let token = await req.headers["x-auth-token"];
            const decode = jwt.verify(token,process.env.SECRETE_KEY);
            console.log(decode);
            req.user = decode.id
            next();
        } catch (error) {
            req.status(500).json({error:"Authorization denied"})
        }
    }
}