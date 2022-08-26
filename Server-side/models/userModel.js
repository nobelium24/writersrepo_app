const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    email:String,
    userName:String,
    password:String
})

const userModel = mongoose.model("users_tb", userSchema)
module.exports = userModel