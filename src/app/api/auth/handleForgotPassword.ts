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
      const resetLink = `${process.env.NEXT_PUBLIC_API}/reset-password?token=${token}`;
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
        html: `
          <table style="width: 100%; height: 100%; min-height:screen; text-align: center;">
            <tr>
              <td style="background-image: url('https://res.cloudinary.com/dupcxxv9f/image/upload/v1732540303/img-body-contactus_eink5r.jpg'); background-size: cover; background-repeat: no-repeat;  margin-top: 20px;">
                <img src="https://res.cloudinary.com/dupcxxv9f/image/upload/v1732540870/logo-footer_rxvq3t.png" alt="Logo" style="width: 250px; margin-bottom: 20px;" />
                <p style="color: #ffffff; font-size: 1.5rem;">Has solicitado restablecer tu contraseña.</p>
                <a href="${resetLink}" style="display: inline-block; font-size: 1rem; color: #007bff; text-decoration: none; background-color: #ffffff; border-radius: 20px; padding: 10px 20px; margin-bottom: 20px;">Restablecer contraseña</a>
              </td>
            </tr>
          </table>
        `,
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
  