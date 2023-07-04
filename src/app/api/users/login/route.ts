import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
// Create a connection with database
connect();

export async function POST(request:NextRequest){
    try {
        // get all the data from the front end
        const {email, password} = await request.json()
        
        // Check if the user exists
        const user = await User.findOne({email})
        if (!user){
            return NextResponse.json({error:"User doesn't exists"}, {status:400})
        }

        //check if the password is correct
        const validPassword =await bcryptjs.compare(password, user.password)

        if(!validPassword){
            return NextResponse.json({error:"Invalid password"}, {status:400})
        }

        // create authentication token data

        const tokenData = {
            id: user._id,
            name:user.username,
            email: user.email
        }

        // create authentication token
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn:'1d'})

        // create response
        const response = NextResponse.json({message:"Login Successfull", success:true})
        
        // set cookies
        response.cookies.set("token",token,{httpOnly:true})

        return response
    } catch (error) {
        return NextResponse.json({error:(error as {message:string}).message}, {status: 500})
    }
    
}
