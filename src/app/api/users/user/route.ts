import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel/userModel";
import { NextRequest, NextResponse } from "next/server";
import getTokenData from "@/helpers/getTokenData";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getTokenData(request);
    // fetch user data based on user id , exclude password
    const user = await User.findOne({ _id: userId }).select("-password -isVerified -__v");

    return NextResponse.json({ message: "User found", user });
  } catch (error) {
    return NextResponse.json(
      { error: (error as { message: string }).message },
      { status: 400 }
    );
  }
}
