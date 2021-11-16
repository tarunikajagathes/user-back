const express=require('express')
const router=express.Router()
const data=require('../controller/data')
const access=require('../controller/access')
const role=require('../controller/role')

router.post('/',access.permission,data.info)
router.get('/',data.getInfo)
router.delete('/:name',access.permission,data.delinfo)
router.get('/data/:name',access.permission,data.getdetail)
router.put('/update',access.permission,data.update)
router.get('/access',access.edit)
router.post('/role',access.permission,role.insert)
router.get('/role/list',access.permission,role.list)

module.exports=router