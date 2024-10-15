import { jwtVerify } from "jose";
const secretKey = new TextEncoder().encode(process.env.JWT_SECRET || "SECRET");

export async function verifyToken(token: string){
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return { valid: true, role: payload.rol as string };
  } catch (error) {
    console.error("Invalid token:", error);
    return { valid: false };
  }
}
export async function verifyTokenUser(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return { valid: true, decoded: payload as { id: number; email: string; role: string } };
  } catch (error) {
    console.error("Token verification failed:", error);
    return { valid: false, decoded: null };
  }
}