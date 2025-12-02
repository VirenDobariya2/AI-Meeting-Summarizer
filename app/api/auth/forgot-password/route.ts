// app/api/auth/forgot-password/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ success: false, message: "Missing email" }, { status: 400 });

    const client = await clientPromise;
    const db = client.db("memomeet");
    const normalized = email.toLowerCase().trim();
    const user = await db.collection("users").findOne({ email: normalized });
    if (!user) return NextResponse.json({ success: false, message: "No user" }, { status: 404 });

    const token = jwt.sign({ id: user._id.toString(), email: normalized }, process.env.RESET_TOKEN_SECRET!, { expiresIn: "1h" });
    const resetUrl = `${process.env.RESET_URL || "http://localhost:3000"}/reset-password?token=${token}`;

    await db.collection("password_resets").updateOne({ email: normalized }, { $set: { token, expiresAt: new Date(Date.now() + 3600 * 1000) } }, { upsert: true });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: normalized,
      subject: "Reset your password",
      html: `<p>Click <a href="${resetUrl}">here</a> to reset your password. Link expires in 1 hour.</p>`,
    });

    return NextResponse.json({ success: true, message: "Reset email sent" });
  } catch (err: any) {
    console.error("forgot-password err", err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
