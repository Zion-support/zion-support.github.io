
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per window
export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {
<<<<<<< HEAD
  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() |
             req.socket.remoteAddress |
=======
  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 
             req.socket.remoteAddress || ;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
    return false;
  }
  current.count++;
  rateLimitMap.set (key, current);
  return true;
}
<<<<<<< HEAD


>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
