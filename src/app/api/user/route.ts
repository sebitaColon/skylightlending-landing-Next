import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) { 
  const page = Number(request.nextUrl.searchParams.get("page") || "1"); 
  const userSession = Number(request.nextUrl.searchParams.get("id")); 
  const { searchParams } = request.nextUrl ;
  const filter = searchParams.get('filter') || undefined;
  const filterRole = searchParams.get('filterRole') || undefined;
  const filterIsActiveParam = searchParams.get('filterIsActive');
  const filterIsActive = filterIsActiveParam === 'true' ? true : filterIsActiveParam === 'false' ? false : undefined;

  try {
  const where: any = {};
  const conditions: any[] = [];
  if (filter) {
    conditions.push({
      OR: [
        { name: { contains: filter } },
        { last_name: { contains: filter } },
        { email: { contains: filter } },
      ],
    });
  }
  if (filterRole) {
    conditions.push({ role: { contains: filterRole } });
  }
  if (filterIsActive !== undefined) {
    conditions.push({ isActive: filterIsActive });
  }
  if (conditions.length > 0) {
    where.AND = conditions;
  }
    where.NOT = { id: userSession};

    const userCountTotal = await prisma.user.count({
      where,
    });
    const totalPages = Math.ceil(userCountTotal / 10)

    const usuarios = await prisma.user.findMany({
      skip: (page - 1) * 10,
      take: 10,
      where,
      orderBy: {
        id: "asc",
      },
    });

      return new NextResponse(
        JSON.stringify({ usuarios, totalPages }),
        { status: 200 }
      );
    } catch (e) {
    return new NextResponse(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

