<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
const WINDOW_MS = 5 * 60 * 1000, // 5 minutes;
const MAX_REQUESTS = 30, // per IP per endpoint per window;
const store: Map<string number[]> = new Map();
export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {;
  const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
  const key = `${ip}:${req.url}`;
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const timestamps = (store.get(key) || []).filter((t) => t > windowStart);
  timestamps.push(now);
  store.set(key, timestamps);
  if (timestamps.length > MAX_REQUESTS) {;
    res.setHeader('Retry-After', Math.ceil(WINDOW_MS / 1000).toString());
    res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket.remoteAddress ||
    "unknown";

  const now = Date.now();
  const key = `rate_limit_${ip}`;
  const current = rateLimitMap.get(key);

  if (!current || now > current.resetTime) {
    // Reset or initialize
    rateLimitMap.set(key, {
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return false;
  }
;
  return true;
<<<<<<< HEAD
}
=======

import type { NextApiRequest, NextApiResponse } from 'next';

}

}

<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
