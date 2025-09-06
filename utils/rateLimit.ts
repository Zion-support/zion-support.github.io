<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
// Simple in-memory rate limiter
interface RateLimitEntry {
  count: number;
  resetTime: number;
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

const rateLimitStore = new Map<string, RateLimitEntry>();

export interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
}

export function checkRateLimit(
  identifier: string, 
  config: RateLimitConfig
): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);
  
  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired entry
    const newEntry: RateLimitEntry = {
      count: 1,
      resetTime: now + config.windowMs
    };
    rateLimitStore.set(identifier, newEntry);
    
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime: newEntry.resetTime
    };
  }
  
  if (entry.count >= config.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime
    };
  }
  
  // Increment count
  entry.count++;
  rateLimitStore.set(identifier, entry);
  
  return {
    allowed: true,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime
  };
}

<<<<<<< HEAD
  return true;
=======
// Rate limiting utilities
export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  keyGenerator?: (req: any) => string;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}

export interface RateLimitInfo {
  limit: number;
  remaining: number;
  reset: number;
  retryAfter?: number;
}

class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.config = config;
  }

  private getKey(req: any): string {
    if (this.config.keyGenerator) {
      return this.config.keyGenerator(req);
    }
    return req.ip || req.connection.remoteAddress || 'unknown';
  }

  private cleanupOldRequests(key: string): void {
    const now = Date.now();
    const windowStart = now - this.config.windowMs;
    
    if (this.requests.has(key)) {
      const timestamps = this.requests.get(key)!.filter(timestamp => timestamp > windowStart);
      this.requests.set(key, timestamps);
    }
  }

  isAllowed(req: any): RateLimitInfo {
    const key = this.getKey(req);
    this.cleanupOldRequests(key);

    const now = Date.now();
    const timestamps = this.requests.get(key) || [];
    
    const limit = this.config.maxRequests;
    const remaining = Math.max(0, limit - timestamps.length);
    const reset = now + this.config.windowMs;

    if (timestamps.length < limit) {
      timestamps.push(now);
      this.requests.set(key, timestamps);
    }

    return {
      limit,
      remaining,
      reset,
      retryAfter: timestamps.length >= limit ? Math.ceil(this.config.windowMs / 1000) : undefined
    };
  }

  reset(key: string): void {
    this.requests.delete(key);
  }

  resetAll(): void {
    this.requests.clear();
  }
}

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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export function getClientIP(req: any): string {
  return (
    req.headers['x-forwarded-for'] ||
    req.headers['x-real-ip'] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.ip ||
    'unknown'
  );
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
