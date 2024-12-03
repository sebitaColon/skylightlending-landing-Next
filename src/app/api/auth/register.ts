import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
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
      
      const JWT_SECRET = process.env.JWT_SECRET || "SECRET";
      const emailVerify = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 15,
          name: name,
          last_name: last_name,
          email: email,
          password: password,
        },
        JWT_SECRET
      );
      const emailVerifyLink = `${process.env.NEXT_PUBLIC_API}/api/verify?token=${emailVerify}`;
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
        subject: "Has solicitado registrarse en skylightlending-landing",
        text: `Has solicitado registrarse en skylightlending-landing. Haz clic en el siguiente enlace para continuar: ${emailVerifyLink}`,
        html: `
          <table style="width: 100%; height: 100%; min-height:screen; text-align: center;">
            <tr>
              <td style="background-image: url('https://res.cloudinary.com/dupcxxv9f/image/upload/v1732540303/img-body-contactus_eink5r.jpg'); background-size: cover; background-repeat: no-repeat;  margin-top: 20px;">
                <img src="https://res.cloudinary.com/dupcxxv9f/image/upload/v1732540870/logo-footer_rxvq3t.png" alt="Logo" style="width: 250px; margin-bottom: 20px;" />
                  <p style="color: #ffffff; font-size: 1.5rem;">You have requested an account at Skylight Lending.</p>
                  <a href="${emailVerifyLink}" style="display: inline-block; font-size: 1rem; color: #007bff; text-decoration: none; background-color: #ffffff; border-radius: 20px; padding: 10px 20px; margin-bottom: 20px;">Verify User</a>
                  <p style="color: #ffffff; font-size: 1.5rem;">If this wasn't you, please ignore this email.</p>
              </td>
            </tr>
          </table>
        `,
        };
      await transporter.sendMail(mailOptions);
      return new NextResponse(
        JSON.stringify({
          message: "Registration successful. Please check your email for verification.",
          success: true,
        })
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Internal server error" }),
        { status: 500 }
      );
    }
  }
  
  