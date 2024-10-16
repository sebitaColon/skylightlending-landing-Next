import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  const { name, last_name, email, role } = await req.json();
  if (!id) {
    return new NextResponse(
      JSON.stringify({ message: "Error id", success: false }),
      { status: 400 }
    );
  }
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
