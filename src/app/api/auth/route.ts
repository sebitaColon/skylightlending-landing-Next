import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();
import { handleLogin } from "./login";
import { handleForgotPassword } from "./ForgotPassword";
import { handleRegister } from "./register";
import { verifyTokenUser } from "@/utils/verifyToken";

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
    const JWT_SECRET = process.env.JWT_SECRET || "SECRET";
    const { password, emailToken } = await req.json();

    const decoded = jwt.verify(emailToken, JWT_SECRET) as { email: string };

    const user = await prisma.user.findUnique({
      where: { email: decoded.email },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ success: false, message: "User not found" }),
        { status: 404 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.update({
      where: { email: user.email },
      data: { password: hashedPassword },
    });
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
