import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const usuarios = await prisma.user.findMany({
      orderBy:{
        id: 'asc'
      }
    });
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


export async function POST() {
  try{
    const response = new NextResponse(
      JSON.stringify({ message: "Logout successful", success: true }),
      { status: 200 }
    );
    response.cookies.set("myToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0, 
      path: "/",
    });
    return response;
  }catch(e){
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
