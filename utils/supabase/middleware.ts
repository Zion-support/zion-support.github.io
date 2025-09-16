
<<<<<<< HEAD



;
export const config = {;
  matcher: ['/dashboard/dashboard/']};


=======
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === '/dashboard' || pathname === '/dashboard/') {
=======
import { NextResponse  } from 'next/server';
import { NextResponse } from 'next/server',;
import type { NextRequest } from 'next/server',;
export function middleware(request: NextRequest) {;
  const { pathname } = request.nextUrl,;
  if (pathname === '/dashboard' || pathname === '/dashboard/') {;
>>>>>>> origin/merge-pr-12271
    const role = request.cookies.get('userRole')?.value || 'talent';
    const target = role === 'client' ? '/dashboard/client' : '/dashboard/talent';
    return NextResponse.redirect(new URL(target, request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/dashboard/'],
};
>>>>>>> origin/auto/autonomy-17186719616
