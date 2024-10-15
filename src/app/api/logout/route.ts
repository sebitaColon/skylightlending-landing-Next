import { NextRequest, NextResponse } from "next/server";
import { verifyTokenUser } from "@/utils/verifyToken";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("myToken")?.value;
  try {
    if (!token) {
      return new NextResponse(
        JSON.stringify({ message: "Not authenticated", success: false }),
        { status: 401 }
      );
    }
    const { valid, decoded } = await verifyTokenUser(token);
    if (!valid) {
      return NextResponse.redirect(new URL("/Login", req.url));
    }
    if (!decoded) {
      return new NextResponse(
        JSON.stringify({ message: "Failed to decode token", success: false }),
        { status: 401 }
      );
    }
    return new NextResponse(
    JSON.stringify({
      message: "User data fetched",
      success: true,
      data: decoded,
    }),
    { status: 200 }
  );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Invalid token", success: false }),
      { status: 401 }
    );
  }
}

export async function POST() {
  const response = new NextResponse(
    JSON.stringify({ message: "Logout successful", success: true }),
    { status: 200 }
  );
  response.cookies.set("myToken", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  return response;
}
