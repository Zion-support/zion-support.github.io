import type { NextApiRequest, NextApiResponse } from 'next';

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 100;

const ipToRequests: Record<string, { timestamps: number[] }> = {};

export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {
  const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown') as string;
  const now = Date.now();
  
  if (!ipToRequests[ip]) {
    ipToRequests[ip] = { timestamps: [] };
  }
  
  const bucket = ipToRequests[ip];
  
  // Remove old timestamps
  bucket.timestamps = bucket.timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
  
  if (bucket.timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    res.status(429).json({ error: 'Rate limit exceeded' });
    return false;
  }
  
  bucket.timestamps.push(now);
  return true;
}