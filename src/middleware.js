import { NextResponse } from 'next/server';
import { parseCookies } from 'nookies';

export function middleware(req) {
  const cookies = parseCookies({ req });
  const token = cookies.token;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next(); 

}


export const config = {
  matcher: ['/dashboard/:path*']
}