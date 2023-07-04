import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    // get a path
    const path = request.nextUrl.pathname

    // check if path is public
    const isPublicPath = path === '/login' || path === '/signup'

    // get the token
    const token = request.cookies.get('token')?.value || '';

    if (isPublicPath && token){
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if(!isPublicPath && !token){
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/profile/:path*', '/login', '/signup', '/'],
}