const {userData} =require('../model/userData')


exports.userData=(manage,name_u,email_u,date_u,pass_u,role_u)=>{
    userData.insertMany({
        Manage_Email:manage,
        Name: name_u,
        email:email_u,
        Date:date_u,
        password:pass_u,
        role: role_u});
}

exports.getData=async(manage)=>{
    
    const data=await userData.find({});
    return data;
}

exports.updateDetails=async(manage,name,value)=>{
    const uservalue=value.name;
    const date=value.date;
    const role=value.role;
    await userData.findOneAndUpdate({Name:name},{Name:uservalue,Date:date,Role:role});
    return "Sucess";
}

exports.getDetails=async(manage,name)=>{
    const data=await userData.find({Name:name});
    return data;
}

exports.delData=async(manage,name)=>{
    const data=await userData.deleteOne({Name:name});
    return data;
}