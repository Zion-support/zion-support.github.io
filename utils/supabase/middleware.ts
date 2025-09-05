<<<<<<< HEAD
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
=======
import type {_NextRequest} from 'next/server';

export function middleware(_request: NextRequest) {_const { pathname} = request.nextUrl;
  if (pathname === '/dashboard' || pathname === '/dashboard/') {_const _role = request.cookies.get('userRole')?.value || 'talent';
    const _target = role === 'client' ? '/dashboard/client' : '/dashboard/talent';
    return NextResponse.redirect(new window.URL(target, _request.url));}
  return NextResponse.next();
}

export const _config = {_matcher: ['/dashboard', _'/dashboard/']};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
