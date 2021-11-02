const express=require('express')
const router=express.Router()
const data=require('../controller/data')

router.post('/',data.info)
router.get('/',data.getInfo)
router.delete('/:name',data.delinfo)
router.get('/data/:name',data.getdetail)
router.put('/update',data.update)

module.exports=router