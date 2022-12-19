const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    nom:String ,
    email: {
        type : String,
        required :true
    },
    age:Number
},{timestamps :true})
module.exports =mongoose.model("User",userSchema);