import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function updateState(id:Number, estado:boolean, adminRole:string) {
    try{
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
          status: 400,
        });
      }
      const updatedUser = await prisma.user.update({
        where: { id: Number(id) },
        data: {
          isActive:estado,
        },
      });
      return new NextResponse(
        JSON.stringify({
          message: "update successfully",
          success: true,
          data: updatedUser,
          status: 200,
        })
      );
    } catch (error) {
      return NextResponse.json({
        message: "do not updated",
        success: false,
        status: 500,
      });
    }
  }