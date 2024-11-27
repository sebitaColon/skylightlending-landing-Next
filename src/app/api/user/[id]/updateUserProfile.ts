import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function updateUserProfile(id:number, name: string, last_name: string){
    try {
      const user = await prisma.user.findUnique({
        where: { id: Number(id) },
      });
      if (!user) {
        return NextResponse.json({
          message: "User not found.",
          success: false,
          status: 404,
        });
      }
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: {
          name,
          last_name,
        },
      });
      return new NextResponse(
        JSON.stringify({
          message: "User update successfully",
          success: true,
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
  
  