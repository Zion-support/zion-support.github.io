
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per window
export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {
  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() |
             req.socket.remoteAddress |
  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 
             req.socket.remoteAddress || ;
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
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    return false;
  }
  current.count++;
  rateLimitMap.set (key, current);
  return true;
<<<<<<< HEAD
}
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
