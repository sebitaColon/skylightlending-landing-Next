import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function updateUser(id:number, name: string,
    last_name: string,
    email: string,
    role: string,
    adminRole:string
  )
    {
    try {
      const userToUpdate = await prisma.user.findUnique({
        where: { id: Number(id) },
      });
      if (!userToUpdate) {
        return NextResponse.json({
          message: "User not found.",
          success: false,
          status: 404,
        });
      }
      if (adminRole === "MANAGER" && userToUpdate.role === "ADMIN") {
        return NextResponse.json({
          message: "A manager cannot update an admin user.",
          success: false,
          status: 403,
        });
      }
      if (adminRole === "MANAGER" && role === "ADMIN") {
        return NextResponse.json({
          message: "A manager cannot assign the role of admin.",
          success: false,
          status: 403, 
        });
      }
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: {
          name,
          last_name,
          email,
          role,
        },
      });
      return new NextResponse(
        JSON.stringify({
          message: "User update successfully",
          success: true,
          data: updatedUser,
          status: 200,
        })
      );
    } catch (error) {
      return NextResponse.json({
        message: "User not updated",
        success: false,
        status: 500,
      });
    }
  }
  
  