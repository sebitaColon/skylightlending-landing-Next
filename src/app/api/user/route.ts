import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
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
