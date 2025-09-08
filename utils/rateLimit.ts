import type { NextApiRequest, NextApiResponse } from 'next';

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 100;
const ipToRequests: Record<string, { timestamps: number[] }> = {};

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = ipToRequests[ip] || { timestamps: [] };
  
  // Drop old timestamps
  bucket.timestamps = bucket.timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
  
  const limited = bucket.timestamps.length >= RATE_LIMIT_MAX_REQUESTS;
  
  if (!limited) {
    bucket.timestamps.push(now);
  }
  
  ipToRequests[ip] = bucket;
  return limited;
}

export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {
  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 
             req.socket.remoteAddress || 
             'unknown';
  
  if (isRateLimited(ip)) {
    res.status(429).json({ error: 'Too Many Requests' });
    return false;
  }
  
  return true;
}