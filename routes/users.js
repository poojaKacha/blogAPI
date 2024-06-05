var express = require('express');
var router = express.Router();
var userC = require('../controller/user')
/* GET users listing. */
router.post('/signup', userC.usercreate)
router.post('/login',userC.userlogin)
router.get('/',userC.userfind)
router.get('/:id', userC.userfindID)
router.put('/:id',userC.userupdate)
router.delete('/:id', userC.userdelete)


module.exports = router;
