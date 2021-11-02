const userData = require('../service/userData')
const jwt = require('jsonwebtoken')
const dotenv=require('dotenv').config();
const key=process.env.key
exports.info = async (req, res) => {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, key);
    const manage = decode.email_u;
    userData.userData(manage, req.body.name, req.body.date, req.body.role);
    res.status(201).send("added");
}

exports.getInfo = async (req, res) => {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, key);
    const manage = decode.email_u;
    const data = await userData.getData(manage);
    res.send(data);
}

exports.getdetail = async (req, res) => {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, key);
    const manage = decode.email_u;
    const data = await userData.getDetails(manage,req.params.name);
    res.send(data);
}

exports.update=async(req,res)=>{
    const token = req.headers.authorization;
    const decode = jwt.verify(token, key);
    const manage = decode.email_u;
    const data = await userData.updateDetails(manage,req.body.name,req.body.value);
    res.send(data);
}

exports.delinfo = async (req, res) => {
    const token = req.headers.authorization;
    const decode = jwt.verify(token, key);
    const manage = decode.email_u;
    userData.delData(manage, req.params.name);
    res.status(201).send("added");
}