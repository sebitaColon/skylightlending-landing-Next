import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { updateState } from "./updateState";
import { updateUser } from "./updateUser";
import { updateUserProfile } from "./updateUserProfile";
const prisma = new PrismaClient();
import cloudinary from "@/utils/cloudinary";
import { UploadApiResponse } from 'cloudinary';
import { verifyTokenUser } from "@/utils/verifyToken";


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const userId = parseInt(params.id);
  if (!userId) {
    return new NextResponse(
      JSON.stringify({ message: "Missing user id", success: false }),
      { status: 400 }
    );
  }
  const token = request.cookies.get("myToken")?.value;
  if (!token) {
    return new NextResponse(
      JSON.stringify({ message: "Not authenticated", success: false }),
      { status: 401 }
    );
  }
  try {
    const { valid, decoded } = await verifyTokenUser(token);
    if (!valid || !decoded) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid token", success: false }),
        { status: 401 }
      );
    }
    const userData = await prisma.user.findUnique({
      where: {
        id: userId, 
      },
    });

    if (!userData) {
      return new NextResponse(
        JSON.stringify({ message: "User not found", success: false }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "User data fetched successfully",
        success: true,
        data: userData,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching user data:", error); // Imprimir el error para debug
    return new NextResponse(
      JSON.stringify({ message: "Error processing request", success: false }),
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  if (!id) {
    return new NextResponse(
      JSON.stringify({ message: "Missing user id", success: false }),
      { status: 400 }
    );
  }
  try {
    const data = await req.formData();
    const file = data.get('file');

    if (!file || !(file instanceof File)) {
      return new NextResponse(
        JSON.stringify({ message: "File is missing or invalid", success: false }),
        { status: 400 }
      );
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `user_${id}`; 
    const response = await new Promise<UploadApiResponse>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            public_id: fileName,
            folder: `users/${id}`,
          },
          (err, result) => {
            if (err) {
              reject(err);
            } else if (!result) {
              reject(new Error('Upload failed, no result returned.'));
            } else {
              resolve(result);
            }
          }
        )
        .end(buffer);
    });
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        image_url: response.secure_url, 
      },
    });
    if (!updatedUser) {
      return new NextResponse(
        JSON.stringify({ message: "Error image uploaded", success: false }),
        { status: 400 }
      );
    }
    return new NextResponse(
      JSON.stringify({ message: "Image uploaded successfully", success: true, imageUrl: response.secure_url}),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return new NextResponse(
      JSON.stringify({ message: "Error uploading image", success: false }),
      { status: 500 }
    );
  }
}


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

