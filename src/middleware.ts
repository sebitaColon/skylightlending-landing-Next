import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/verifyToken";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("myToken")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }

  const { valid, role } = await verifyToken(token);
  if (!valid) {
    return NextResponse.redirect(new URL("/Login", req.url));
  }
  try {
    if (
      req.nextUrl.pathname.startsWith("/admin") &&
      role !== "ADMIN" &&
      role !== "MANAGER"
    ) {
      return NextResponse.redirect(new URL("/Login", req.url));
    }
    if (req.nextUrl.pathname.startsWith("/HomeUser") && role !== "USER") {
      return NextResponse.redirect(new URL("/Login", req.url));
    }
    if (req.nextUrl.pathname.startsWith("/Profile") 
      && role !== "USER" 
      && role !== "ADMIN" 
      && role !== "MANAGER" ) {
      return NextResponse.redirect(new URL("/Login", req.url));
    }
    return NextResponse.next();
  } catch (error) {
    console.error("Error verifying token:", error);
    return NextResponse.redirect(new URL("/Login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/HomeUser/:path*"],
};
