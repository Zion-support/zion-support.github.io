import type { NextApiRequest, NextApiResponse } from 'next';

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// In-memory store for rate limiting
const rateLimitStore = new Map<string, RateLimitEntry>();

const defaultConfig: RateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100
};

export function rateLimit(
  req: NextApiRequest, 
  res: NextApiResponse, 
  config: Partial<RateLimitConfig> = {}
): boolean {
  const finalConfig = { ...defaultConfig, ...config };
  const ip = getClientIP(req);
  const now = Date.now();
  
  const entry = rateLimitStore.get(ip);
  
  if (!entry || now > entry.resetTime) {
    // New entry or expired entry
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + finalConfig.windowMs
    });
    return true;
  }
  
  if (entry.count >= finalConfig.maxRequests) {
    // Rate limit exceeded
    res.status(429).json({ 
      error: 'Too Many Requests',
      retryAfter: Math.ceil((entry.resetTime - now) / 1000)
    });
    return false;
  }
  
  // Increment count
  entry.count++;
  rateLimitStore.set(ip, entry);
  return true;
}

function getClientIP(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  const realIP = req.headers['x-real-ip'];
  
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  
  if (typeof realIP === 'string') {
    return realIP;
  }
  
  return req.socket.remoteAddress || 'unknown';
}

// Clean up expired entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(ip);
    }
  }
}, 5 * 60 * 1000); // Clean up every 5 minutes