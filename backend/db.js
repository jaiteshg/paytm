import mongoose from "mongoose";
import { Schema } from "mongoose";


mongoose.connect("mongodb://localhost:27017/paytm", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

const User = mongoose.model("User" , userSchema) ;

module.exports = {
    User ,
}