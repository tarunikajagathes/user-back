const roles=require('../service/roles')

exports.insert=async(req,res)=>{
    try{
        const role=req.body.role;
        await roles.insert(role);
        res.status(201).send("added");
    }
    catch{
        res.send(500);
    }
}

exports.list=async(req,res)=>{
    try{
         const data=await roles.list();
         res.send(data);
    }
    catch{
        res.send(500);
    }
}

exports.delete=async(req,res)=>{
    try{
         const data=await roles.delete(req.params.role);
         res.send(data);
    }
    catch{
        console.log(err);
        res.send(500);
    }
}