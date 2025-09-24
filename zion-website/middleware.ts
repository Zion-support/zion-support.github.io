import { NextRequest, NextResponse } from 'next/server',
// Security headers configuration,
const securityHeaders = {
  'X-DNS-Prefetch-Control': 'onX-XSS-Protection': '1, mode=blockX-Frame-Options': 'SAMEORIGINX-Content-Type-Options': 'nosniffReferrer-Policy': 'origin-when-cross-originPermissions-Policy': 'camera=(), microphone=(), geolocation=()Strict-Transport-Security': 'max-age=31536000, includeSubDomains, preloadContent-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google-analytics.com *.googletagmanager.com",
    "style-src 'self' 'unsafe-inline' *.googleapis.com",
    "img-src 'self' data: blob: *.google-analytics.com *.googletagmanager.com",
    "font-src 'self' *.gstatic.com",
    "connect-src 'self' *.google-analytics.com *.googletagmanager.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    'upgrade-insecure-requests'
  ].join(),
},
export function middleware(request: NextRequest) {
  const response = NextResponse.next(),
  // Add security headers,
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)}),
  // Add CORS headers for API routes,
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set(
      'Access-Control-Allow-Origin',
      process.env.ALLOWED_ORIGINS || 'http: //localhost:3000'),
    response.headers.set(
      'Access-Control-Allow-MethodsGET, POST, PUT, DELETE, OPTIONS'),
    response.headers.set(
      'Access-Control-Allow-HeadersContent-Type, Authorization')}
,
  return response}
,
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
},