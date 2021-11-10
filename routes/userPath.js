const express=require('express')
const router=express.Router()
const data=require('../controller/data')
const access=require('../controller/access')

router.post('/',access.permission,data.info)
router.get('/',data.getInfo)
router.delete('/:name',access.permission,data.delinfo)
router.get('/data/:name',access.permission,data.getdetail)
router.put('/update',access.permission,data.update)
router.get('/access',access.edit)

module.exports=router