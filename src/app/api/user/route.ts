import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
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

      const JWT_SECRET = process.env.JWT_SECRET || "SECRET";
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // Expira en 30 días
          id: userLogin.id,
          email: userLogin.email,
          role: userLogin.rol,
        },
        JWT_SECRET
      );
      const response = new NextResponse(
        JSON.stringify({ message: "Login successful", success: true }),
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
  } else if (view == "forgotPassword") {
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
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // Expira en 30 días
          id: existingUser.id,
          email: existingUser.email,
        },
        JWT_SECRET
      );
      //aca enviar el correo con token
      const resetLink = `http://localhost:3000/ForgotPassword?token=${token}`;
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL,
          pass: process.env.PASSWORD,
        },
        tls: {
          rejectUnauthorized: false, // Ignora certificados no válidos
        },
      });
      const mailOptions = {
        from: "i06047071@gmail.com",
        to: email,
        subject: "Restablecer tu contraseña",
        text: `Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace para continuar: ${resetLink}`,
        html: `<p>Has solicitado restablecer tu contraseña.</p><p><a href="${resetLink}">Haz clic aquí para restablecer tu contraseña</a></p>`,
      };
      transporter.sendMail(mailOptions);

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
  } else if (view == "resetPassword") {
    console.log(password);
    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully", success: true }),
      { status: 200 }
    );
  }

  await prisma.$disconnect();
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
