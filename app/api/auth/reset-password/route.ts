// app/api/auth/reset-password/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { token, newPassword } = await req.json();
    if (!token || !newPassword) return NextResponse.json({ success: false, message: "Missing fields" }, { status: 400 });

    let payload: any;
    try { payload = jwt.verify(token, process.env.RESET_TOKEN_SECRET!); } catch { return NextResponse.json({ success: false, message: "Invalid or expired token" }, { status: 400 }); }

    const client = await clientPromise;
    const db = client.db("memomeet");
    const normalized = (payload.email || "").toLowerCase().trim();

    const rec = await db.collection("password_resets").findOne({ email: normalized });
    if (!rec || rec.token !== token) return NextResponse.json({ success: false, message: "Invalid token" }, { status: 400 });

    const hashed = await bcrypt.hash(newPassword, 10);
    await db.collection("users").updateOne({ email: normalized }, { $set: { password: hashed } });
    await db.collection("password_resets").deleteOne({ email: normalized });

    return NextResponse.json({ success: true, message: "Password reset" });
  } catch (err: any) {
    console.error("reset-password err", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
