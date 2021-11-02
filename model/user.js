const mongoose =require( 'mongoose');

var schema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type:Object,
        require: true
    },
    phone_number:{
        type:Number,
        requite:true
    },
    creation_dt: {
        type: Date,
        require: true
    }
});

const user= mongoose.model('UserManagement', schema);
module.exports = {user};