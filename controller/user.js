var USER = require('../model/user')
var bcrypt = require('bcrypt')

exports.usercreate = async function (req, res, next) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10)
      let admincretae = await USER.create(req.body)
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
  exports.userlogin = async function (req, res, next) {

    try {
      let userfind = await USER.findOne({ email: req.body.email })
      if (!userfind) {
        throw new Error('user not found')
      }
  
      let passverify = await bcrypt.compare(req.body.password, userfind.password)
      if (!passverify) {
        throw new Error('password invaild')
      }
      res.status(201).json({
        status: "user login successfull",
        userfind
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
};
  exports.userfind =  async function (req, res, next) {
    try {
  
      let userfind = await USER.find(req.body)
      res.status(201).json({
        status: "success",
        message: "user found suucessfull",
        userfind
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
  
      })
    }
};
  exports.userfindID = async function (req, res, next) {
    try {
  
      let userfind = await USER.findById(req.params.id)
      res.status(201).json({
        status: "success",
        message: "user found suucessfull",
        userfind
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
  
      })
    }
};
  exports.userupdate = async function (req, res, next) {

    try {
      req.body.password = await bcrypt.hash(req.body.password, 10)
      let data = await USER.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.status(201).json({
        status: "success",
        message: "user update successfull",
        data
  
      })
    } catch (error) {
      res.status(404).json({
        status: 'fail',
        message: error.message
      })
    }
  
  
};
  exports.userdelete =async function (req, res, next) {
    try {
  
      let userfind = await USER.findByIdAndDelete(req.params.id)
      res.status(201).json({
        status: "success",
        message: "user delte suucessfull",
        userfind
      })
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message
  
      })
    }
  };