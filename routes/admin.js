var express = require('express');
var router = express.Router();
var adminC = require('../controller/admin')

/* GET home page. */
router.post('/signup',adminC.admincreate )
router.post('/login',adminC.adminlogin)






module.exports = router;
