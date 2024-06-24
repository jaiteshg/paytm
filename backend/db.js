const mongoose = require ("mongoose");
const { Schema } = require("mongoose");


mongoose.connect("mongodb+srv://gjaitesh:LVsOdefXa6OXpLDG@paytm.i0bdoh0.mongodb.net/");

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
        type : mongoose.Schema.Types.ObjectId,
        Reference :'User' ,
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