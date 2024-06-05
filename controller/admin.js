var ADMIN = require('../model/admin')
var bcrypt = require('bcrypt')

exports.admincreate = async function (req, res, next) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10)
      let admincretae = await ADMIN.create(req.body)
      res.status(201).json({
        status: "success",
        message: "admin create suucessfull",
        admincretae
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
  
      })
    }
};
  exports.adminlogin =  async function (req, res, next) {

    try {
      let adminfind = await ADMIN.findOne({ email: req.body.email })
      if (!adminfind) {
        throw new Error('user not found')
      }
  
      let passverify = await bcrypt.compare(req.body.password, adminfind.password)
      if (!passverify) {
        throw new Error('password invaild')
      }
      res.status(201).json({
        status: "user login successfull",
        adminfind
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  
  }