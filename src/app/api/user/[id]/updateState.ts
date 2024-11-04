import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function updateState(id:Number, estado:boolean) {
    try{
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