import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
<<<<<<< HEAD
export function middleware(request: NextRequest) {const { pathname } = request.nextUrl;
  if (pathname === '/dashboard' |pathname === '/dashboard/') {const role = request.cookies.get('userRole')?.value |'talent';
    const target = role === 'client' ? '/dashboard/client' : '/dashboard/talent';
=======
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/dashboard' || pathname === '/dashboard/') {
    const role = request.cookies.get('userRole')?.value || 'talent';
    const target =
      role === 'client' ? '/dashboard/client' : '/dashboard/talent';
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    return NextResponse.redirect(new URL(target, request.url));
  }
  return NextResponse.next();
}
<<<<<<< HEAD
export const config = {matcher: ['/dashboard/dashboard/']}
=======

export const config = {
  matcher: ['/dashboard', '/dashboard/'],
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
