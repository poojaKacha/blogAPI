var BLOG = require('../model/blog');
var bcrypt = require('bcrypt')

exports.blogcreate = async function (req, res, next) {
    try {
        
    req.body.profileImage = req.file.filename
        req.body.password = await bcrypt.hash(req.body.password, 10)
        let blogcraete = await BLOG.create(req.body)
        res.status(201).json({
            status: "success",
            message: "blog create successfull",
            blogcraete
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }



};

exports.blogfind = async function (req, res, next) {
    try {

        let blogcraete = await BLOG.findOne(req.body)
        res.status(201).json({
            status: "success",
            message: "blog find successfull",
            blogcraete
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }



};
exports.blogupdate = async function (req, res, next) {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        let data = await BLOG.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(201).json({
            status: "success",
            message: "blog create successfull",
            data
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }



};
exports.blogdelete = async function (req, res, next) {
    try {

        await BLOG.findByIdAndDelete(req.params.id)
        res.status(201).json({
            status: "success",
            message: "blog delte successfull",

        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        })
    }





};
