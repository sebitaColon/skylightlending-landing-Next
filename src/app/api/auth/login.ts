import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export async function handleLogin(email: string, password: string) {
  try {
    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({ message: "All fields are required", success: false }),
        { status: 400 }
      );
    }
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "User not found", success: false }),
        { status: 404 }
      );
    }
    if (user.isActive === false) {
      return new NextResponse(
        JSON.stringify({ message: "Account suspended", success: false }),
        { status: 404 }
      );
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new NextResponse(
        JSON.stringify({ message: "Incorrect password", success: false }),
        { status: 401 }
      );
    }
    const JWT_SECRET = process.env.JWT_SECRET || "SECRET";
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        id: user.id,
        email: user.email,
        rol: user.role,
      },
      JWT_SECRET
    );
    const response = new NextResponse(
      JSON.stringify({
        message: "Login successful",
        success: true,
        rol: user.role,
      }),
      { status: 200 }
    );
    response.cookies.set("myToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
    return response;
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
