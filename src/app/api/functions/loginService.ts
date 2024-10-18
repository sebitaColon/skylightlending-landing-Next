import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
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

export async function handleForgotPassword(email: string) {
  if (!email) {
    return new NextResponse(
      JSON.stringify({ message: "The field is required", success: false }),
      { status: 400 }
    );
  }
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
      return new NextResponse(
        JSON.stringify({ message: "User doesn't exist", success: false }),
        { status: 404 }
      );
    }

    const JWT_SECRET = process.env.JWT_SECRET || "SECRET";
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 15,
        id: existingUser.id,
        email: existingUser.email,
      },
      JWT_SECRET
    );
    const resetLink = `http://localhost:3000/ForgotPassword?token=${token}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailOptions = {
      from: "i06047071@gmail.com",
      to: email,
      subject: "Restablecer tu contraseña",
      text: `Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace para continuar: ${resetLink}`,
      html: `<p>Has solicitado restablecer tu contraseña.</p><p><a href="${resetLink}">Haz clic aquí para restablecer tu contraseña</a></p>`,
    };
    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully", success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during password recovery:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
