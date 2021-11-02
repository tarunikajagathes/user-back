const express = require('express')
const router = express.Router()
const siginin = require('../controller/signin')
const login = require('../controller/login')
const validator = require('../controller/validator')

router.post('/signin',  validator.signin, siginin.siginin)
router.get('/email/:email', siginin.checkUser)
router.post('/login', login.userLogin)

module.exports=router