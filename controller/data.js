const userData = require('../service/userData')
const jwt = require('jsonwebtoken')
const dotenv=require('dotenv').config();
const crypto=require('../service/crypto')
const key=process.env.key
exports.info = async (req, res) => {
    try{
        const token = req.headers.authorization;
    const decode = jwt.verify(token, key);
    const manage = decode.email_u;
    const password= crypto.encrypt(req.body.password)
    userData.userData(manage, req.body.name,req.body.email, req.body.date,password, req.body.role);
    res.status(201).send("added");
    }
    catch(err){
        console.log(err);
        res.send(err);
        
    }
    
}

exports.getInfo = async (req, res) => {
    try{
        const token = req.headers.authorization;
    const decode = jwt.verify(token, key);
    const manage = decode.email_u;
    const data = await userData.getData(manage);
    res.send(data);
    }
    catch(err){
        res.send(err);
    }
    
}

exports.getdetail = async (req, res) => {
    try{
        const token = req.headers.authorization;
        const decode = jwt.verify(token, key);
        const manage = decode.email_u;
        const data = await userData.getDetails(manage,req.params.name);
        res.send(data);
    }
    catch(err){
        res.send(err);
    }
   
}

exports.update=async(req,res)=>{
    try{
        const token = req.headers.authorization;
    const decode = jwt.verify(token, key);
    const manage = decode.email_u;
    const data = await userData.updateDetails(manage,req.body.name,req.body.value);
    res.send(data);
    }
    catch(err){
        res.send(err);
    }
    
}

exports.delinfo = async (req, res) => {
    try{
        const token = req.headers.authorization;
    const decode = jwt.verify(token, key);
    const manage = decode.email_u;
    userData.delData(manage, req.params.name);
    res.status(201).send("added");
    }
    catch(err){
        res.send(err);
    }
    
}