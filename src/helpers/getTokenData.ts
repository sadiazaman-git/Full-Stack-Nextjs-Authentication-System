import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";


const getTokenData = (request:NextRequest) => {
    try {
        // get token
        const token = request.cookies.get("token")?.value || '';
        const decodeToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return decodeToken.id
    } catch (error) {
        throw new Error((error as {message:string}).message)
    }
  
}

export default getTokenData