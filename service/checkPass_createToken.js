const crypto=require('../service/crypto')
const findUser =require('../service/findUser')
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv').config();
const key=process.env.key

exports.check=async(email_u,pass_u)=>{
    try{
        const email=await findUser.find(email_u);
    const pass = crypto.decrypt(email.data[0].password);
    const role=email.data[0].role;
    if (pass_u == pass) {
        const token = jwt.sign({
            email_u,
            role
        }, key);
       return {token:token}
    } else {
        // send status 401 Unauthorized
        return "error";
    }
    }
    catch(err){
        console.log(err)
    }
    
    
}