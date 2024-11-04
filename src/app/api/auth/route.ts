import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();
import { handleLogin } from "./login";
import { handleForgotPassword } from "./forgotPassword";
import { handleRegister } from "./register";
import { verifyTokenUser } from "@/utils/verifyToken";
import { resetPassword } from "./resetPassword";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("myToken")?.value;
  try {
    if (!token) {
      return new NextResponse(
        JSON.stringify({ message: "Not authenticated", success: false }),
        { status: 401 }
      );
    }
    const { valid, decoded } = await verifyTokenUser(token);
    if (!valid) {
      return NextResponse.redirect(new URL("/Login", request.url));
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

export async function POST(request: Request) {
  const { name, last_name, email, password, action } = await request.json();
  switch (action) {
    case "login":
      return await handleLogin(email, password);
    case "register":
      return await handleRegister(name, last_name, email, password);
    case "forgotPassword":
      return await handleForgotPassword(email);
    default:
      return new NextResponse(
        JSON.stringify({ message: "Invalid view parameter", success: false }),
        { status: 400 }
      );
  }
}

export async function PUT(req: Request) {
  try {
    const { password, emailToken } = await req.json();
    resetPassword(password, emailToken);
    return new Response(
      JSON.stringify({
        success: true,
        message: "Password updated successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ success: false, message: "An error occurred" }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
