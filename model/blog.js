var mongoose = require('mongoose')
var Schema = mongoose.Schema 

var blogSchema = new Schema({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required:true
    },
    profileImage : {
        type : String,
        required : true
    }
})
var BLOG = mongoose.model('blog', blogSchema)
module.exports = BLOG