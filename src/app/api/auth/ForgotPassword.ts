import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

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
      const resetLink = `http://localhost:3000/ResetPassword?token=${token}`;
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
  