const {user} = require('../model/user')
const {userData}=require('../model/userData')

exports.find=async(email_u) =>{
    try{
    // const value=await user.find({
    //     email: email_u
    // });
    const val=await userData.find({
        email:email_u
    });
    // if(value.length!=0){
    // return {data:value};
    // }
    if(val.length!=0){
        return {data:val};
    }
    else{
        return {data:"no data"};
    }
}
    catch(err){
        return {data:"no data"};
    }
}