







=======
import type { NextApiRequest, NextApiResponse } from 'next';

const WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const MAX_REQUESTS = 30; // per IP per endpoint per window

const store: Map<string, number[]> = new Map();

export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {
  const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
  const key = `${ip}:${req.url}`;
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const timestamps = (store.get(key) || []).filter((t) => t > windowStart);
  timestamps.push(now);
  store.set(key, timestamps);

  if (timestamps.length > MAX_REQUESTS) {
    res.setHeader('Retry-After', Math.ceil(WINDOW_MS / 1000).toString());
    res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
    return false;
  }

  return true;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/auto/autonomy-17186719616
=======
export interface RateLimitInfo  {limit: number;
  remaining: number;
  reset: number;
  retryAfter?: number;
}
class RateLimiter {private requests: Map<string, number[]> = new Map()private config: RateLimitConfig;
  constructor(config: RateLimitConfig) {this.config = config;
  }
  private getKey(req: any): string {if (this.config.keyGenerator) {return this.config.keyGenerator(req)}
    return req.ip || req.connection.remoteAddress || 'unknown';
  }
  private cleanupOldRequests(key: string): void {const now = Date.now()const windowStart = now - this.config.windowMs;
    if (this.requests.has(key)) {const timestamps = this.requests.get(key)!.filter(timestamp => timestamp > windowStart)this.requests.set(key, timestamps)}
  }
  isAllowed(req: any): RateLimitInfo {const key = this.getKey(req)this.cleanupOldRequests(key)const now = Date.now()const timestamps = this.requests.get(key) || [];
    const limit = this.config.maxRequests;
    const remaining = Math.max(0, limit - timestamps.length)const reset = now + this.config.windowMs;
    if (timestamps.length < limit) {timestamps.push(now)this.requests.set(key, timestamps)}
    return {limit,remaining,reset,retryAfter: timestamps.length >= limit ? Math.ceil(this.config.windowMs / 1000) : undefined;
    }}
  reset(key: string): void {this.requests.delete(key)}
  resetAll(): void {this.requests.clear()}
}
// Default rate limiter instance;
export const rateLimiter = new RateLimiter({windowMs: 15 * 60 * 1000, // 15 minutes;
  maxRequests: 100,keyGenerator: (req) => req.ip || req.connection.remoteAddress || 'unknown';
})// Express middleware for rate limiting;
export function rateLimit() {const limiter = new RateLimiter(config)export function rateLimit() {return (req: any, res: any, next: any) => {const info = limiter.isAllowed(req)res.set({'X-RateLimit-Limit': info.limit.toString(),'X-RateLimit-Remaining': info.remaining.toString(),'X-RateLimit-Reset': new Date(info.reset).toISOString()})if (info.retryAfter) {res.set('Retry-After', info.retryAfter.toString())return res.status(429).json({error: 'Too Many Requests',retryAfter: info.retryAfter;
      })}
    next()}}
}
}
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes;
// Default rate limiter instance
export const rateLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100,
  keyGenerator: (req) => req.ip || req.connection.remoteAddress || 'unknown'
});
// Express middleware for rate limiting
export function rateLimit(config: RateLimitConfig) {
  const limiter = new RateLimiter(config);
  return (req: any, res: any, next: any) => {
    const info = limiter.isAllowed(req);
    res.set({
      'X-RateLimit-Limit': info.limit.toString(),
      'X-RateLimit-Remaining': info.remaining.toString(),
      'X-RateLimit-Reset': new Date(info.reset).toISOString()
    });
    if (info.retryAfter) {
      res.set('Retry-After', info.retryAfter.toString());
      return res.status(429).json({
        error: 'Too Many Requests',
        retryAfter: info.retryAfter
      });
    }
    next();
  };
}
}
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per window
export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {
  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() |
             req.socket.remoteAddress |
             'unknown';
  const now = Date.now();
  const key = `rate_limit_${ip}`;
  const current = rateLimitMap.get(key);
  if (!current |now > current.resetTime) {
    // Reset or initialize
    rateLimitMap.set(key, {
      count: 1
      resetTime: now + RATE_LIMIT_WINDOW
    });
    return true;
  }
  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    res.status(429).json({ error: 'Too Many Requests' });
;
const rateLimitMap = new Map < string, { count: number; reset_time: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes;
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per window;
export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() |;
             req.socket.remoteAddress |;
             'unknown';
  const now = Date.now()const key = `rate_limit_${ip}`;
  const current = rateLimitMap.get(key)if (!current |now > current.resetTime) {// Reset or initialize;
    rateLimitMap.set(key, {count: 1;
      resetTime: now + RATE_LIMIT_WINDOW;
    })return true;
  }
  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {res.status(429).json({ error: 'Too Many Requests' })const rateLimitMap = new Map < string, { count: number; reset_time: number }>()const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes;
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per window;
export function rate_limit (req: NextApiRequest, res: NextApiResponse): boolean {const ip = (req.headers['x - forwarded - for'] as string)?.split (', ')[0]?.trim () ||;
            req.socket.remote_address ||;
            'unknown';const now = Date.now ()const key = `rate_limit_${ip}`;
  const current  = rateLimitMap.get (key)// Check condition;
if ( {) {$2;
}
    // Reset or initialize;
    rateLimitMap.set (key, {count: 1,reset_time: now + RATE_LIMIT_WINDOW;
    })return true;
  }
  // Check condition;
if ( {) {$2;
}
    res.status (429).json ({ error: 'Too Many Requests' })return false;
  }current.count++;
  rateLimitMap.set (key, current)return true;}}}ursor/fix-website-loading-errors-and-merge-6662;
    res.status (429).json ({ error: 'Too Many Requests' });
    return false;
  }
  current.count++;
  rateLimitMap.set (key, current);
  return true;




}


>>>>>>> origin/merge-pr-12271
>>>>>>> cursor/create-and-deploy-new-content-376e
