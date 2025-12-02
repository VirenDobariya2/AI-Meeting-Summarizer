// /app/api/auth/login/route.ts
import { NextResponse, NextRequest } from "next/server";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return NextResponse.json({ message: "Invalid password" }, { status: 400 });

    return NextResponse.json({ role: user.role }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ message: e.message }, { status: 500 });
  }
}
