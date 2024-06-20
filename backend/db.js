const mongoose = require ("mongoose");
const { Schema } = require("mongoose");


mongoose.connect("mongodb://localhost:27017/paytm");

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true,
        minlength : 3,
        maxlength : 20
    },
    firstname : { 
        type : String,
        required : true,
        trim : true,
      
    },
    lastname : {
        type : String,
        required : true,
        trim : true,
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    }
}) ;

const accountSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    balance : {
        type : Number,
        required : true,
    }
}) 

const User = mongoose.model("User" , userSchema) ;
const Account = mongoose.model("Account" , accountSchema) ;

module.exports = {
    User ,
    Account ,
}