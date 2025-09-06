<<<<<<< HEAD
<<<<<<< HEAD
export function rateLimit(options: { windowMs: number; max: number }) {
  return (req: any, res: any, next: any) => {
    // Mock rate limiting implementation
    next();
  };
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
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
    return false;
  }
  current.count++;
  rateLimitMap.set(key, current);
  return true;
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
import type { NextApiRequest, NextApiResponse } from 'next';

const WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const MAX_REQUESTS = 30; // per IP per endpoint per window

const store: Map<string, number[]> = new Map();
}

export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {
  const ip =
    (req.headers['x-forwarded-for'] as string) ||
    req.socket.remoteAddress ||
    'unknown';
  const key = `${ip}:${req.url}`;
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const timestamps = (store.get(key) || []).filter(t => t > windowStart);
  timestamps.push(now);
  store.set(key, timestamps);

  if (timestamps.length > MAX_REQUESTS) {
    res.setHeader('Retry-After', Math.ceil(WINDOW_MS / 1000).toString());
    res
      .status(429)
      .json({ error: 'Rate limit exceeded. Please try again later.' });
    return false;
  }

  return true;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
