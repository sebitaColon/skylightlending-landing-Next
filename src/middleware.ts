import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'SECRET';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('myToken')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/Login', req.url));
  }
  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    const role = payload.rol;
    if (req.nextUrl.pathname.startsWith('/admin') && role !== "ADMIN" && role !== "MANAGER") {
        return NextResponse.redirect(new URL('/Login', req.url));
    }
    if(req.nextUrl.pathname.startsWith('/HomeUser') && role !== "USER"){
        return NextResponse.redirect(new URL('/Login', req.url));
    }
    return NextResponse.next();
  } catch (error) {
    console.error('Error verifying token:', error);
    return NextResponse.redirect(new URL('/Login', req.url));
  }
}

export const config = {
  matcher: ['/admin/:path*','/HomeUser/:path*'],
};
