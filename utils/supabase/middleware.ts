<<<<<<< HEAD
import { NextResponse } from 'next/server',;
import type { NextRequest } from 'next/server',;
;
export function middleware(request:NextRequest) {;
  const { pathname } = request.nextUrl,;
  if (pathname === '/dashboard' || pathname === '/dashboard/') {;
    const role = request.cookies.get('userRole')?.value || 'talent',;
    const target = role === 'client' ? '/dashboard/client' :'/dashboard/talent',;
    return NextResponse.redirect(new URL(target, request.url)),;
  }
  return NextResponse.next(),;
}
;
export const config = {;
  matcher:['/dashboard/dashboard/']},;
=======
import { NextResponse } from 'next/server',
import type { NextRequest } from 'next/server',
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl,
  if (pathname === '/dashboard' || pathname === '/dashboard/') {
    const role = request.cookies.get('userRole')?.value || 'talent',
    const target = role === 'client' ? '/dashboard/client' : '/dashboard/talent',
    return NextResponse.redirect(new URL(target, request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/dashboard/']},
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
