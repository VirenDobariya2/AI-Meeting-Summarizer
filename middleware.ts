import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { type JwtPayload } from "jsonwebtoken";

function verifyToken(token?: string | null): (JwtPayload & { role?: string }) | null {
  if (!token) return null;
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as string | JwtPayload;
    if (typeof payload === "string") return null;
    return payload as JwtPayload & { role?: string };
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || null;
  const { pathname } = req.nextUrl;

  const protectedPaths = ["/dashboard/admin", "/dashboard/user"];
  const auth = ["/login", "/verify-otp"];

  if (protectedPaths.some((r) => pathname.startsWith(r))) {
    const user = verifyToken(token);
    if (!user) return NextResponse.redirect(new URL("/login", req.url));
  }

  if (auth.some((r) => pathname.startsWith(r))) {
    const user = verifyToken(token);
    if (user) {
      return NextResponse.redirect(
        new URL(`/dashboard/${user.role}`, req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/login",
    "/verify-otp",
  ],
};
