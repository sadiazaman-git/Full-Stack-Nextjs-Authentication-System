import mongoose from "mongoose";

// Create user Schema With mongoos
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true, "Please provide a username"]
    },
    email:{
        type:String,
        required:[true, "Please provide a email"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Please provide a password"]
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date

})

// Check if the table already exists if doens't create one. Even if we'll creater User table it'll convert it into users. because mongoDB convert it into lower case and plural case
const user = mongoose.models.users || mongoose.model("users", userSchema);
export default user