import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
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
      //consulta a la base de datos
      const userLogin = await prisma.user.findUnique({
        where: { email },
      });

      //si el usuario no existe
      if (!userLogin) {
        return new NextResponse(
          JSON.stringify({ message: "User not found", success: false }),
          { status: 404 }
        );
      }

      //compara si la contraseña es correcta
      if (userLogin.password !== password) {
        return new NextResponse(
          JSON.stringify({ message: "Incorrect password", success: false }),
          { status: 401 }
        );
      }
      
      //si todo esta okey
      return new NextResponse(
        JSON.stringify({ message: "Login successful", success: true }),
        { status: 200 }
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({ error: "Internal server error" }),
        { status: 500 }
      );
    }
  } else if (view == "register") {
     // Validar datos de entrada si estan vacios
    if (!name || !last_name || !email || !password) {
      return new NextResponse(
        JSON.stringify({ message:"All fields are required", success: false }),
        { status: 400 }
      );
    }
    // Verificar si el usuario ya existe
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

      // Crear nuevo usuario
      const nuevoUsuario = await prisma.user.create({
        data: {
          name,
          last_name,
          email,
          password, // En un entorno real, asegúrate de encriptar la contraseña antes de guardarla
        },
      });
      return new NextResponse( JSON.stringify({message:  "User created successfully", success: true, data: nuevoUsuario}));
    } catch (error) {
      // Manejo de errores más detallado
      return new NextResponse(
        JSON.stringify({ error: "Internal server error"}),
        { status: 500 }
      );
    } 
  }

  await prisma.$disconnect();
}
