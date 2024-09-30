import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const usuarios = await prisma.user.findMany();
    
    return new NextResponse(JSON.stringify(usuarios), { status: 201 });
  } catch (e) {
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: Request) {
  const { name, last_name, email, password, view } = await request.json();

  if (view == "login") {
    try {
      const userLogin = await prisma.user.findUnique({
        where: { email },
      });
      if (!userLogin) {
        return new NextResponse(
          JSON.stringify({ message: "User not found", success: false }),
          { status: 404 }
        );
      }

      const isPasswordValid = await bcrypt.compare(
        password,
        userLogin.password
      );
      if (!isPasswordValid) {
        return new NextResponse(
          JSON.stringify({ message: "Incorrect password", success: false }),
          { status: 401 }
        );
      }
      return new NextResponse(
        JSON.stringify({ message: "Login successful", success: true }),
        { status: 200 }
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Internal server error" }),
        { status: 500 }
      );
    }
  } else if (view == "register") {
    if (!name || !last_name || !email || !password) {
      return new NextResponse(
        JSON.stringify({ message: "All fields are required", success: false }),
        { status: 400 }
      );
    }
    try {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });
      if (existingUser) {
        return new NextResponse(
          JSON.stringify({ message: "User already exists", success: false }),
          { status: 400 }
        );
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const nuevoUsuario = await prisma.user.create({
        data: {
          name,
          last_name,
          email,
          password: hashedPassword,
        },
      });
      return new NextResponse(
        JSON.stringify({
          message: "User created successfully",
          success: true,
          data: nuevoUsuario,
        })
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Internal server error" }),
        { status: 500 }
      );
    }
  }

  await prisma.$disconnect();
}
