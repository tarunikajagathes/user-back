const {userData} =require('../model/userData')


exports.userData=(manage,name_u,date_u,role_u)=>{
    userData.insertMany({
        Manage_Email:manage,
        Name: name_u,
        Date:date_u,
        Role: role_u});
}

exports.getData=async(manage)=>{
    
    const data=await userData.find({Manage_Email:manage});
    return data;
}

exports.updateDetails=async(manage,name,value)=>{
    const uservalue=value.name;
    const date=value.date;
    const role=value.role;
    await userData.findOneAndUpdate({Name:name,Manage_Email:manage},{Name:uservalue,Date:date,Role:role});
    return "Sucess";
}

exports.getDetails=async(manage,name)=>{
    
    const data=await userData.find({Manage_Email:manage,Name:name});
    return data;
}

exports.delData=async(manage,name)=>{
    const data=await userData.deleteOne({Manage_Email:manage,Name:name});
    return data;
}