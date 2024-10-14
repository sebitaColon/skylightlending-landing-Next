import { jwtVerify } from "jose";

export async function verifyToken(token: string): Promise<{ valid: boolean; role?: string }> {
  try {
    const secretKey = new TextEncoder().encode(process.env.JWT_SECRET || "SECRET");
    const { payload } = await jwtVerify(token, secretKey);
    return { valid: true, role: payload.rol as string };
  } catch (error) {
    console.error("Invalid token:", error);
    return { valid: false };
  }
}