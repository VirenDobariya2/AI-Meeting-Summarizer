// /app/api/auth/verify-otp/route.ts
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/User";
import { connectDB } from "@/lib/db";

export async function POST(req: NextRequest) {
  await connectDB();

  const { email, otp } = await req.json();

  const user = await User.findOne({ email });

  if (!user || user.otp !== otp)
    return NextResponse.json({ message: "Wrong OTP" }, { status: 400 });

  // OTP success → remove OTP
  user.otp = null;
  await user.save();

  return NextResponse.json({ role: user.role }, { status: 200 });
}
