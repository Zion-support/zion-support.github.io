import type { NextApiRequest, NextApiResponse } from 'next';

const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 100;

const requestCounts = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {
  const ip = req.headers['x-forwarded-for'] as string || 
             req.headers['x-real-ip'] as string || 
             req.socket.remoteAddress || 
             'unknown';

  const now = Date.now();
  const key = ip;
  const current = requestCounts.get(key);

  if (!current || now > current.resetTime) {
    // Reset or initialize
    requestCounts.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    res.status(429).json({ error: 'Too Many Requests' });
    return false;
  }

  current.count++;
  return true;
}