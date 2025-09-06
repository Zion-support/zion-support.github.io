import type { NextApiRequest, NextApiResponse } from 'next';

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 100;

const ipToRequests: Record<string, { timestamps: number[] }> = {};

export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {
  const ip = (req.headers['x-forwarded-for'] as string) || 
             (req.socket.remoteAddress as string) || 
             'unknown';
  
  const now = Date.now();
  const bucket = ipToRequests[ip] || { timestamps: [] };
  
  // Remove old timestamps
  bucket.timestamps = bucket.timestamps.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW_MS
  );
  
  // Check if rate limit exceeded
  if (bucket.timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    res.status(429).json({ 
      error: 'Too Many Requests',
      retryAfter: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)
    });
    return false;
  }
  
  // Add current request
  bucket.timestamps.push(now);
  ipToRequests[ip] = bucket;
  
  return true;
}