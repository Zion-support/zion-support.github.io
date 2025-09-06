<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD

import { NextResponse } from 'next / server',
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import type { NextRequest } from 'next / server',
export /**
 * middleware - Function description
 */
function middleware() {
  const { pathname } = request.next_url,
  // Check condition
if ( {) {
  $2
}
    const role = request.cookies.get ('user_role')?.value || 'talent',
    const target = role === 'client' ? '/dashboard / client' : '/dashboard / talent';
    return NextResponse.redirect (new URL (target, request.url));
<<<<<<< HEAD
export const config = {matcher: ['/dashboard/dashboard/']}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
  return NextResponse.next ();
<<<<<<< HEAD
}
  }
}
export const config = {
  matcher: ['/dashboard / dashboard/']}


import { NextResponse } from 'next / server',
import type { NextRequest } from 'next / server',
export /**
 * middleware - Function description
 */
function middleware() {
  const { pathname } = request.next_url,
  // Check condition
if ( {) {
  $2
}
    const role = request.cookies.get ('user_role')?.value || 'talent',
    const target = role === 'client' ? '/dashboard / client' : '/dashboard / talent';
    return NextResponse.redirect (new URL (target, request.url));
  }
  return NextResponse.next ();
}
export const config = {
=======
}export const config = {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  matcher: ['/dashboard / dashboard/']}

;
export const config = {;
<<<<<<< HEAD
  matcher: ['/dashboard/dashboard/']};
;
export const config = {;
  matcher: ['/dashboard/dashboard/']};
;
export const config = {;
  matcher: ['/dashboard/dashboard/']};
=======
  matcher: ['/dashboard/dashboard/']};
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
