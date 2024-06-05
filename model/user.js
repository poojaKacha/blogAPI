const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        require:true
    },
    password: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require: true,
        unique:true
    },
    status: {
        type: String,
        require: true,
        enum: ["Pending", "Reject", "Approve"],
        default  :"Pending"
    }
})
const USER = mongoose.model('user', userSchema)
module.exports = USER