import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "SECRET";
export async function GET(req: NextRequest) {
  const token = req.cookies.get("myToken")?.value;
  if (!token) {
    return new NextResponse(
      JSON.stringify({ message: "Not authenticated", success: false }),
      { status: 401 }
    );
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
      email: string;
      role: number;
    };
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
