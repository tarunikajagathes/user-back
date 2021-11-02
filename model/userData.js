const mongoose =require( 'mongoose');

var schema = new mongoose.Schema({
    Manage_Email: {
        type: String,
        require: true
    },
    Name: {
        type: String,
        require: true
    },
    Date: {
        type:String,
        require: true
    },
    Role:{
        type:String,
        requite:true
    }
});

const userData= mongoose.model('UserData', schema);
module.exports = {userData};