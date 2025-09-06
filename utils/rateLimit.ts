/**
 * Rate limiting utilities
 */

import { NextApiRequest, NextApiResponse } from 'next';

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

const defaultConfig: RateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100
};

const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(
  req: NextApiRequest, 
  res: NextApiResponse, 
  config: RateLimitConfig = defaultConfig
): boolean {
  const ip = getClientIP(req);
  const now = Date.now();
  const windowStart = now - config.windowMs;
  
  // Clean up old entries
  for (const [key, value] of requestCounts.entries()) {
    if (value.resetTime < now) {
      requestCounts.delete(key);
    }
  }
  
  const key = `${ip}-${Math.floor(now / config.windowMs)}`;
  const current = requestCounts.get(key) || { count: 0, resetTime: now + config.windowMs };
  
  if (current.count >= config.maxRequests) {
    res.status(429).json({ 
      error: 'Too Many Requests',
      retryAfter: Math.ceil((current.resetTime - now) / 1000)
    });
    return false;
  }
  
  current.count++;
  requestCounts.set(key, current);
  
  return true;
}

export function getClientIP(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  const realIP = req.headers['x-real-ip'];
  
  if (forwarded) {
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return Array.isArray(realIP) ? realIP[0] : realIP;
  }
  
  return req.socket.remoteAddress || 'unknown';
}

export function createRateLimit(config: RateLimitConfig) {
  return (req: NextApiRequest, res: NextApiResponse) => rateLimit(req, res, config);
}