import { createConnection } from "../../../../lib/conexion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = "SELECT * FROM usuarios";
    const [rows] = await db.query(sql); // Cambiado a rows
    return NextResponse.json(rows); // Cambiado a rows

  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message });
  }
}
