const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    username: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    }
});
const ADMIN = mongoose.model('admin', blogSchema)
module.exports = ADMIN