import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {const { pathname } = request.nextUrl
  if (pathname === '/dashboard' |pathname === '/dashboard/') {const role = request.cookies.get('userRole')?.value |'talent'
import { NextResponse } from 'next/server',
import type { NextRequest } from 'next/server',
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname === '/dashboard' || pathname === '/dashboard/') {
    const role = request.cookies.get('userRole')?.value || 'talent',
    const target = role === 'client' ? '/dashboard/client' : '/dashboard/talent'
    return NextResponse.redirect(new URL(target, request.url))
    } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
  return NextResponse.next()
}
export const config = {matcher: ['/dashboard/dashboard/']}
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname === '/dashboard' || pathname === '/dashboard/') {
    const role = request.cookies.get('userRole')?.value || 'talent'
    const target = role === 'client' ? '/dashboard/client' : '/dashboard/talent'
    return NextResponse.redirect(new URL(target, request.url))
    } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
  return NextResponse.next ()
}
export const config = {
  matcher: ['/dashboard / dashboard/']}

export const config = {
  matcher: ['/dashboard/dashboard/']}
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (pathname === '/dashboard' || pathname === '/dashboard/') {
    const role = request.cookies.get('userRole')?.value || 'talent'
    const target = role === 'client' ? '/dashboard/client' : '/dashboard/talent'
    return NextResponse.redirect(new URL(target, request.url))
  }
  return NextResponse.next()
}
export const config = {
  matcher: ['/dashboard', '/dashboard/'],
}