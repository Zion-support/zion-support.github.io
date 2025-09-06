
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(request: NextRequest) {const { pathname } = request.nextUrl;
  if (pathname === '/dashboard' |pathname === '/dashboard/') {const role = request.cookies.get('userRole')?.value |'talent';

  }
  return NextResponse.next ();
}

  return NextResponse.next();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


export const config = {
  matcher: ['/dashboard / dashboard/']}

;
export const config = {;
  matcher: ['/dashboard/dashboard/']};

;
export const config = {;
  matcher: ['/dashboard/dashboard/']};
;
export const config = {;
  matcher: ['/dashboard/dashboard/']};





