import { NextRequest, NextResponse } from 'next/server',
// Simple in-memory rate limiter (use Redis in production),
const rateLimitMap = new Map(),
interface RateLimitConfig {
  windowMs: number,
  maxRequests: number,
}
,
const defaultConfig: RateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes,
  maxRequests: 100, // limit each IP to 100 requests per windowMs};
export function rateLimit(config: RateLimitConfig = defaultConfig) {
  return (request: NextRequest) => {
    const ip =,
      request.ip || request.headers.get('x-forwarded-for') || 'unknown',
    const now = Date.now(),
    const windowStart = now - config.windowMs,
    // Clean old entries,
    for (const [key, data] of rateLimitMap.entries()) {
      if (data.windowStart < windowStart) {
        rateLimitMap.delete(key)}
    }
,
    // Check current IP,
    const ipData = rateLimitMap.get(ip),
    if (!ipData) {
      rateLimitMap.set(ip, {
        requests: 1;
        windowStart: now;
      }),
      return NextResponse.next()}
,
    if (ipData.requests >= config.maxRequests) {
      return new NextResponse('Too Many Requests', { status: 429 })}
,
    ipData.requests++,
    return NextResponse.next()};
}
,
// API rate limiting middleware,
export function apiRateLimit(request: NextRequest) {
  const apiConfig: RateLimitConfig = {
    windowMs: 15 * 60 * 1000, // 15 minutes,
    maxRequests: 50, // limit each IP to 50 API requests per windowMs};
  return rateLimit(apiConfig)(request)}
,