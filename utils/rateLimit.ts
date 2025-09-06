import type { NextApiRequest, NextApiResponse } from 'next';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(req: NextApiRequest, res: NextApiResponse, maxRequests = 100, windowMs = 15 * 60 * 1000): boolean {
  const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const key = `${ip}-${req.url}`;
  
  const current = rateLimitMap.get(key);
  
  if (!current || now > current.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (current.count >= maxRequests) {
    res.status(429).json({ error: 'Too many requests' });
    return false;
  }
  
  current.count++;
  return true;
}