import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  const isAdminRoute = pathname.startsWith("/admin");
  const isUserRoute = pathname.startsWith("/dashboard");
  const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/signup");

  // Not logged in → redirect
  if (!token && (isAdminRoute || isUserRoute)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Role protection
  if (isAdminRoute && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (isUserRoute && token?.role !== "user") {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  // Auth page block for logged-in users
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL(token.role === "admin" ? "/admin" : "/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*", "/login", "/signup"],
};
