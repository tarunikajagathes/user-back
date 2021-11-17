const {roles}=require('../model/role')

exports.insert=(role)=>{
    roles.insertMany({
        role:role,
        creation_dt: Date.now()
    })
}

exports.list=async()=>{
    const data=await roles.find({})
    return data;
}

exports.delete=async(role)=>{
    await roles.deleteMany({role:role});
}