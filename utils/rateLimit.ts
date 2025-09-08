import type { NextApiRequest, NextApiResponse } from "next";

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket.remoteAddress ||
    "unknown";

  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetTime) {
    // Create new entry or reset expired entry
    const newEntry: RateLimitEntry = {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return true;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    res.status(429).json({ error: "Too Many Requests" });
=======    return false;
  }

  current.count++;
  rateLimitMap.set (key, current);
  return true;

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
import type { NextApiRequest, NextApiResponse } from 'next';
;
const rateLimitMap = new Map < string, { count: number; reset_time: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes;
const RATE_LIMIT_MAX_REQUESTS = 100; // 100 requests per window;
export function rate_limit (req: NextApiRequest, res: NextApiResponse): boolean {
  const ip = (req.headers['x - forwarded - for'] as string)?.split (', ')[0]?.trim () ||;
            req.socket.remote_address ||;
            'unknown';
;
  const now = Date.now ();
  const key = `rate_limit_${ip}`;
  const current = rateLimitMap.get (key);
;
  // Check condition
if ( {) {
  $2
}
    // Reset or initialize;
    rateLimitMap.set (key, {
      count: 1,
      reset_time: now + RATE_LIMIT_WINDOW;
    });
    return true;
  }
  // Check condition
if ( {) {
  $2
}
    res.status (429).json ({ error: 'Too Many Requests' });
    return false;
  }
  current.count++;
  rateLimitMap.set (key, current);
  return true;

import type { NextApiRequest, NextApiResponse } from 'next';

}

}

