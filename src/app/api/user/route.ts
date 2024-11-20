import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) { 
  const { searchParams } = request.nextUrl ;
  const filter = searchParams.get('filter') || undefined;
  const filterRole = searchParams.get('filterRole') || undefined;

  try {
  const where: any = {};
  const conditions: any[] = [];
  if (filter) {
    conditions.push({
      OR: [
        { name: { contains: filter, mode: 'insensitive' } },
        { last_name: { contains: filter, mode: 'insensitive' } },
        { email: { contains: filter, mode: 'insensitive' } },
      ],
    });
  }
  if (filterRole) {
    conditions.push({ role: { contains: filterRole, mode: 'insensitive' } });
  }
  if (conditions.length > 0) {
    where.AND = conditions;
  }
    const usuarios = await prisma.user.findMany({
      where,
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
