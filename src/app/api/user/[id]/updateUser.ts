import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function updateUser(id:number, name: string,
    last_name: string,
    email: string,
    role: string)
    {
    try {
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
  
  