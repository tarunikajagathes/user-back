const {validationResult,check}=require('express-validator');

exports.signin=[
    check('email', 'Invalid Email').isEmail().notEmpty(),
    check('username', 'Required').notEmpty(),
    check('password', 'Password Invalid').isLength({
        min: 9
    }),
    check('phone', 'Invalid Number').isLength({
        min: 10
    }, {
        max: 10
    }).isNumeric(),
    check('address', 'Invalid Address').isLength({
        max: 100
    })
],(req,res,next)=>{
     const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.status(422).json(errors)
    }
    else{
        next();
    }
}

exports.login= [
    check('email', 'Invalid Email').isEmail(),
    check('password', 'Password Inalid').isLength({
        min: 6
    })
],(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        res.status(422).json(errors)
    }
    else{
        next();
    }
}