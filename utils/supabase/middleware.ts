<<<<<<< HEAD
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(request: NextRequest) {const { pathname } = request.nextUrl;
  if (pathname === '/dashboard' |pathname === '/dashboard/') {const role = request.cookies.get('userRole')?.value |'talent';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import { NextResponse } from 'next/server',;
import type { NextRequest } from 'next/server',;
export function middleware(request: NextRequest) {;
  const { pathname } = request.nextUrl,;
  if (pathname === '/dashboard' || pathname === '/dashboard/') {;
    const role = request.cookies.get('userRole')?.value || 'talent',;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
    const target = role === 'client' ? '/dashboard/client' : '/dashboard/talent';
    return NextResponse.redirect(new URL(target, request.url));
  }
  return NextResponse.next();
}
<<<<<<< HEAD
<<<<<<< HEAD
export const config = {matcher: ['/dashboard/dashboard/']}
=======
=======
=======
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
export const config = {matcher: ['/dashboard/dashboard/']}
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======

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
  matcher: ['/dashboard / dashboard/']}

=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
;
export const config = {;
  matcher: ['/dashboard/dashboard/']};
