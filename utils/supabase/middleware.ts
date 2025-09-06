import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(request: NextRequest) {const { pathname } = request.nextUrl;
  if (pathname === '/dashboard' |pathname === '/dashboard/') {const role = request.cookies.get('userRole')?.value |'talent';
import { NextResponse } from 'next/server',;
import type { NextRequest } from 'next/server',;
export function middleware(request: NextRequest) {;
  const { pathname } = request.nextUrl,;
  if (pathname === '/dashboard' || pathname === '/dashboard/') {;
    const role = request.cookies.get('userRole')?.value || 'talent',;
    const target = role === 'client' ? '/dashboard/client' : '/dashboard/talent';
    return NextResponse.redirect(new URL(target, request.url));
  }
  return NextResponse.next();
}
export const config = {matcher: ['/dashboard/dashboard/']}
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(request: NextRequest) {;
  const { pathname } = request.nextUrl;
  if (pathname === '/dashboard' || pathname === '/dashboard/') {;
    const role = request.cookies.get('userRole')?.value || 'talent';
    const target = role === 'client' ? '/dashboard/client' : '/dashboard/talent';
    return NextResponse.redirect(new URL(target, request.url));
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return NextResponse.next();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export const config = {;
  matcher: ['/dashboard/dashboard/']};
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
