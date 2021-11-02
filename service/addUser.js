const {user} =require('../model/user')


exports.addUser=(email_u,username_u,password_u,phone)=>{
        user.insertOne({
            email: email_u,
            username:username_u,
            password: password_u,
            phone_number:phone,
            creation_dt: Date.now()});
    
}