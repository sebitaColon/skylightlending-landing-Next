import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const usuarios = await prisma.users.findMany();
    return new NextResponse(JSON.stringify(usuarios),{ status : 201 });
  } catch (e) {
    return new NextResponse(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: Request) {
  const { name, last_name, email, password } = await request.json();

  try {
    const nuevoUsuario = await prisma.users.create({
      data: {
        name,
        last_name,
        email,
        password
      }
    });
    return new NextResponse(JSON.stringify(nuevoUsuario), { status: 201 });
  } catch (e) {
    return new NextResponse(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}


/* este esta bien
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = [
      { id: 1, name: "carlitos", email: "hola@hola.com" },
      { id: 2, name: "juancito", email: "chau@hola.com" },
    ];
    return NextResponse.json(users, { status: 200 });
  } catch (e) {}
}
*/