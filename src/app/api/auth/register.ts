import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export async function handleRegister(
    name: string,
    last_name: string,
    email: string,
    password: string
  ) {
    if (!name || !last_name || !email || !password) {
      return new NextResponse(
        JSON.stringify({ message: "All fields are required", success: false }),
        { status: 400 }
      );
    }
    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return new NextResponse(
          JSON.stringify({ message: "User already exists", success: false }),
          { status: 400 }
        );
      }
      const userCount = await prisma.user.count();
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          name,
          last_name,
          email,
          password: hashedPassword,
          role: userCount === 0 ? "ADMIN" : "USER",
        },
      });
      const message =
        userCount === 0
          ? "Admin created successfully"
          : "User created successfully";
      return new NextResponse(
        JSON.stringify({
          message,
          success: true,
          data: newUser,
        })
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Internal server error" }),
        { status: 500 }
      );
    }
  }
  
  