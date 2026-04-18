const {Schema} = require("mongoose");
const passport = require("passport");
const UserSchema = new Schema({
email: {
    type:String,
    required:true,
    unique: true
},
password: {
    type:String,
    required: true
}
})

module.exports = {UserSchema};