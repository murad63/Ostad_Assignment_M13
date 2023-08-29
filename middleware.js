import { NextResponse } from "next/server";

export async function middleware(res, request) {
  console.log('---------------------------------')
  console.log(new URL('/'))
  return NextResponse.redirect(new URL('/', request.url))
}
export const config = {
  matcher: '/redirection/:path*',
}