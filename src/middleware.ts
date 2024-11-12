import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("myToken")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const { valid, role } = await verifyToken(token);
  if (!valid) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  try {
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      role !== "ADMIN" &&
      role !== "MANAGER"
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (req.nextUrl.pathname.startsWith("/homeUser") && role !== "USER") {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (req.nextUrl.pathname.startsWith("/profile") 
      && role !== "USER" 
      && role !== "ADMIN" 
      && role !== "MANAGER" ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/homeUser/:path*"],
};
