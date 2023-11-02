import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

// Create a connection with database
connect();

export async function POST(request:NextRequest){
    try {
        // get all the data from the front end
        const response = await request.json()
        const {name, email, password} = response

        // Check if the user already exists
        const user = await User.findOne({email})
        if (user){
            return NextResponse.json({error:"User already exists"}, {status:400})
        }

        //Generate Hash password for password encryption
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword =await bcryptjs.hash(password, salt)

        // create new User

        const newUser = new User({
            username:name,
            email:email,
            password:hashedPassword
        })
        // save the user to database
        const savedUser  = await newUser.save()

        //send verification email

        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({message:"User Created Successfully",
        success:true,
        savedUser})
    } catch (error) {
        return NextResponse.json({error:(error as {message:string}).message}, {status: 500})
    }
    
}
