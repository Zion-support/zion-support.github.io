
    const target = role === 'client' ? '/dashboard/client' : '/dashboard/talent';
    return NextResponse.redirect(new URL(target, request.url));
  }
  return NextResponse.next();
}

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
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
