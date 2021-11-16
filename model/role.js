const mongoose =require( 'mongoose');

var schema = new mongoose.Schema({
    role:{
        type:String,
        required:true
    },
    creation_dt: {
        type: Date,
        require: true
    }
});

const roles= mongoose.model('roles', schema);
module.exports = {roles};