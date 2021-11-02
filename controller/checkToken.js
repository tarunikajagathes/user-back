const jwt=require('jsonwebtoken')
const dotenv=require('dotenv').config();
const key=process.env.key
exports.auth=(req,res,next)=>{
    const token=req.headers.authorization;
    try{
    jwt.verify(token,key)
      next();
    }
    catch{
        res.status(401).send("Unauthorized user");
    }
}