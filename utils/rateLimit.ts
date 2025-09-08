import type { NextApiRequest, NextApiResponse } from 'next';

const requests = new Map<string, number[]>();

export function rateLimit(req: NextApiRequest, res: NextApiResponse, limit = 10, windowMs = 60000): boolean {
  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || 
             req.socket.remoteAddress || 
             'unknown';
  
  const now = Date.now();
  const windowStart = now - windowMs;
  
  // Get existing requests for this IP
  const ipRequests = requests.get(ip) || [];
  
  // Filter out old requests
  const recentRequests = ipRequests.filter(time => time > windowStart);
  
  // Check if limit exceeded
  if (recentRequests.length >= limit) {
    res.status(429).json({ error: 'Too many requests' });
    return false;
  }
  
  // Add current request
  recentRequests.push(now);
  requests.set(ip, recentRequests);
  
  return true;
}