import { verifyTokenEmail } from "@/utils/verifyToken";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";


export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const emailVerify = searchParams.get("token");
    try {
      if (!emailVerify) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      const { valid, decoded } = await verifyTokenEmail(emailVerify);
      if (!valid) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      if (!decoded) {
        return new NextResponse(
          JSON.stringify({ message: "Failed to decode token", success: false }),
          { status: 401 }
        );
      }
      const userCount = await prisma.user.count();
      const hashedPassword = await bcrypt.hash(decoded.password, 10);
      const newUser = await prisma.user.create({
        data: {
          name: decoded.name,
          last_name: decoded.last_name,
          email: decoded.email,
          password: hashedPassword,
          role: userCount === 0 ? "ADMIN" : "USER",
        },
      });
      return NextResponse.redirect(new URL("/login", request.url));
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid token", success: false }),
        { status: 401 }
      );
    }
  }
  