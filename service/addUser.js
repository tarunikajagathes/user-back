const {user} =require('../model/user')


exports.addUser=(email_u,username_u,password_u,phone,role_u)=>{
        user.insertMany({
            email: email_u,
            username:username_u,
            role:role_u,
            password: password_u,
            phone_number:phone,
            creation_dt: Date.now()});
    
}