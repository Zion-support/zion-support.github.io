'use client';
/**
 * Rate Limiting Middleware
 * Prevents abuse by limiting the number of requests from a single IP
 * @module rateLimiter
 */
export interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  max: number; // Maximum number of requests per window
  message?: string; // Custom error message
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}
interface RequestRecord {
  count: number;
  resetTime: number;
}
/**
 * Simple in-memory rate limiter
 * For production, use Redis or similar distributed storage
 */
export class RateLimiter {
  private requests: Map<string, RequestRecord> = new Map();
  private config: RateLimitConfig;
  constructor(config: RateLimitConfig) {
    this.config = {
      message: 'Too many requests, please try again later.',
      skipSuccessfulRequests: false,
      skipFailedRequests: false,
      ...config,
    };
    // Cleanup old entries every minute
    setInterval(() => this.cleanup(), 60000);
  }
  /**
   * Check if request is allowed
   * @param identifier - Unique identifier (e.g., IP address)
   * @returns Whether the request is allowed
   */
  check(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
    const _now = Date.now();
    const _record = this.requests.get(identifier);
    // No record or expired
    if (!record || now > record.resetTime) {
      const _resetTime = now + this.config.windowMs;
      this.requests.set(identifier, { count: 1, resetTime });
      return { allowed: true, remaining: this.config.max - 1, resetTime };
    }
    // Increment count
    if (record.count < this.config.max) {
      record.count++;
      this.requests.set(identifier, record);
      return {
        allowed: true,
        remaining: this.config.max - record.count,
        resetTime: record.resetTime,
      };
    }
    // Limit exceeded
    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }
  /**
   * Reset rate limit for identifier
   * @param identifier - Unique identifier
   */
  reset(identifier: string): void {
    this.requests.delete(identifier);
  }
  /**
   * Cleanup expired entries
   */
  private cleanup(): void {
    const _now = Date.now();
    for (const [key, record] of this.requests.entries()) {
      if (now > record.resetTime) {
        this.requests.delete(key);
      }
    }
  }
  /**
   * Get current stats
   */
  getStats(): { totalTracked: number } {
    return { totalTracked: this.requests.size };
  }
}
/**
 * Pre-configured rate limiters for common use cases
 */
export const rateLimiters = {
  // Strict: 10 requests per minute
  strict: new RateLimiter({
    windowMs: 60 * 1000,
    max: 10,
    message: 'Too many requests. Please try again in a minute.',
  }),
  // Standard: 100 requests per 15 minutes
  standard: new RateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 100,
  }),
  // Lenient: 1000 requests per hour
  lenient: new RateLimiter({
    windowMs: 60 * 60 * 1000,
    max: 1000,
  }),
  // API: 60 requests per minute
  api: new RateLimiter({
    windowMs: 60 * 1000,
    max: 60,
    message: 'API rate limit exceeded. Please try again later.',
  }),
  // Authentication: 5 login attempts per 15 minutes
  auth: new RateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: 'Too many login attempts. Please try again later.',
    skipSuccessfulRequests: true,
  }),
};
/**
 * Get client identifier from request
 * @param request - Request object
 * @returns Client identifier (IP address or user ID)
 */
export function getClientIdentifier(request: Request): string {
  // Try to get real IP from headers (for proxied requests)
  const _headers = request.headers;
  const _forwardedFor = headers.get('x-forwarded-for');
  const _realIp = headers.get('x-real-ip');
  const _cfConnectingIp = headers.get('cf-connecting-ip');
  if (cfConnectingIp) return cfConnectingIp;
  if (realIp) return realIp;
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  // Fallback to a default identifier
  return 'unknown';
}
/**
 * Create rate limit middleware
 * @param limiter - Rate limiter instance
 * @returns Middleware function
 */
export function createRateLimitMiddleware(limiter: RateLimiter) {
  return async (request: Request): Promise<Response | null> => {
    const _identifier = getClientIdentifier(request);
    const { allowed, remaining, resetTime } = limiter.check(identifier);
    if (!allowed) {
      return new Response(
        JSON.stringify({
          error: 'Rate limit exceeded',
          retryAfter: Math.ceil((resetTime - Date.now()) / 1000),
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(Math.ceil((resetTime - Date.now()) / 1000)),
            'X-RateLimit-Limit': String(limiter['config'].max),
            'X-RateLimit-Remaining': String(remaining),
            'X-RateLimit-Reset': String(resetTime),
          },
        }
      );
    }
    // Request allowed - headers can be added to response later
    return null;
  };
}
export default RateLimiter;
