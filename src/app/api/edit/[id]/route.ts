import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Epilogue } from "next/font/google";
const prisma = new PrismaClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  const { name, last_name, email, role, action, estado } = await req.json();
  if (!id) {
    return new NextResponse(
      JSON.stringify({ message: "Error id", success: false }),
      { status: 400 }
    );
  }
  switch(action){
    case "updateState":
     return await handleState(id, estado);
     break;
     case "updateRole":
      return await handleRole(id, name, last_name, email, role);
    break;
  }
}

export async function handleState(id:Number, estado:boolean) {
  const updatedUser = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      status:estado,
    },
    
  });
  return new NextResponse(
    JSON.stringify({
      message: "estado update successfully",
      success: true,
      data: updatedUser,
      status: 200,
    })
  );
}






export async function handleRole(id:number, name: string,
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

