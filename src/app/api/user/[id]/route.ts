import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { updateState } from "./updateState";
import { updateUser } from "./updateUser";
import { updateUserProfile } from "./updateUserProfile";
const prisma = new PrismaClient();

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  const { name, last_name, email, role, action, estado, adminRole } = await req.json();
  if (!id) {
    return new NextResponse(
      JSON.stringify({ message: "Error id", success: false }),
      { status: 400 }
    );
  }
  switch(action){
    case "updateState":
     return await updateState(id, estado, adminRole);
    case "updateUser":
      return await updateUser(id, name, last_name, email, role, adminRole);
    case "updateUserProfile":
      return await updateUserProfile(id, name, last_name);
  }
}

