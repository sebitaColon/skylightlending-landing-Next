import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export async function resetPassword(password:string, emailToken:string) {
    const JWT_SECRET = process.env.JWT_SECRET || "SECRET";
    
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
}
