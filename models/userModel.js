const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
});
const user = mongoose.model("user",
    userModel);
    module.exports= user;
    