// app/api/auth/signup/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {connectDB} from "@/lib/db";
import User from "@/app/models/User";

export async function POST(req: Request) {
  await connectDB();

  try {
    const { name, email, password, role } = await req.json();

    const exists = await User.findOne({ email });
    if (exists) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashed,
      role: role || "user",
    });

    return NextResponse.json({ message: "Signup Successful" });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
