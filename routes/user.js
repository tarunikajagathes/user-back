const express = require('express')
const router = express.Router()
const siginin = require('../controller/signin')
const login = require('../controller/login')
const validator = require('../controller/validator')
const {
    check
} = require('express-validator')


router.post('/signin', [
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
], validator.signin, siginin.siginin)
router.get('/email/:email', siginin.checkUser)
router.post('/login', [
    check('email', 'Invalid Email').isEmail(),
    check('password', 'Password Inalid').isLength({
        min: 9
    })
], login.userLogin)

module.exports=router