// lib/auth.ts
import jwt from "jsonwebtoken";
import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";

export function verifyToken(token?: string | null) {
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as any;
  } catch {
    return null;
  }
}

export async function getUserFromToken(token?: string | null) {
  const payload = verifyToken(token);
  if (!payload?.id) return null;
  const client = await clientPromise;
  const db = client.db("memomeet");
  const user = await db.collection("users").findOne({ _id: new ObjectId(payload.id) });
  if (!user) return null;
  const { password, ...safe } = user as any;
  return safe;
}
