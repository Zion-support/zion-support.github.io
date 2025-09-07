import type { NextApiRequest, NextApiResponse } from 'next';
const WINDOW_MS = 5 * 60 * 1000, // 5 minutes
const MAX_REQUESTS = 30, // per IP per endpoint per window

const store: Map<string, number[]> = new Map($2);
export function rateLimit(req: NextApiRequest, res: NextApiResponse): boolean {
  const ip = $2;
  const key = $2;
  const now = Date.now($2);
  const windowStart = $2;
  const timestamps = $2;
  timestamps.push($2);
  store.set($2);
  if (timestamps.length > MAX_REQUESTS) {
    res.setHeader('Retry-After', Math.ceil(WINDOW_MS / 1000).toString()),
    res.status(429).json($2);
    return false
  }

  return true
}