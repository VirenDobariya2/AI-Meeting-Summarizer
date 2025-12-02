// /app/api/auth/send-otp/route.ts
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/User";
import { connectDB } from "@/lib/db";


export async function POST(req :NextRequest) {
  await connectDB();

  const { email } = await req.json();

  const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP

  await User.updateOne({ email }, { otp });

  console.log("OTP SENT:", otp); // replace with email service

  return NextResponse.json({ message: "OTP sent" });
}
