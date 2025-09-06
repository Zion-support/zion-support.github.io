<<<<<<< HEAD
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
<<<<<<< HEAD
export function middleware(request: NextRequest) {const { pathname } = request.nextUrl;
  if (pathname === '/dashboard' |pathname === '/dashboard/') {const role = request.cookies.get('userRole')?.value |'talent';
=======
<<<<<<< HEAD
import { NextResponse } from 'next/server',;
import type { NextRequest } from 'next/server',;
export function middleware(request: NextRequest) {;
  const { pathname } = request.nextUrl,;
  if (pathname === '/dashboard' || pathname === '/dashboard/') {;
    const role = request.cookies.get('userRole')?.value || 'talent',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD

export const config = {
  matcher: ['/dashboard', '/dashboard/'],
};
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
=======
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
;
export const config = {;
  matcher: ['/dashboard/dashboard/']};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
