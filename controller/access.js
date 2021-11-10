const jwt=require('jsonwebtoken');
const key=process.env.key;


exports.edit=(req,res)=>{
    const token=req.headers.authorization;
    const decode=jwt.verify(token,key);
    const role=decode.role;
    if(role=="Editor"){
        data={data1:"granted"}
        res.send(data);
    }
    else{
        data={data1:"Not allowed to change the data!!"}
        res.send(data);
    }
}

exports.permission=(req,res,next)=>{
    const token=req.headers.authorization;
    const decode=jwt.verify(token,key);
    const role=decode.role;
    if(role=="Editor"){
        next();
    }
    else{
        res.status(403);
    }
}