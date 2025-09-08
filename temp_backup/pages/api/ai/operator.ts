import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
const openai = new OpenAI($2);
// In-memory simple rate limiter (per IP)
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000, // 5 minutes
const RATE_LIMIT_MAX_REQUESTS = $2;
const ipToRequests: Record<string, { timestamps: number[] }> = {},

function isRateLimited(ip: string): boolean {
  const now = Date.now($2);
  const bucket = $2;
  // Drop old timestamps
  bucket.timestamps = bucket.timestamps.filter($2);
  const limited = $2;
  if (!limited) {
    bucket.timestamps.push(now)
  }
  ipToRequests[ip] = bucket,
  return limited
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  // Auth via Bearer token
  const authHeader = $2;
  const token = $2;
  if (!token || token !== process.env.OPERATOR_API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // Rate limit
  const ip = $2;
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too Many Requests' })
  }

  try {
    const { prompt, system, temperature } = (typeof req.body = $2;
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Missing prompt' })
    }

    const sys = system || 'You are a professional writing assistant. Write clear, concise, and helpful content. Format output as markdown.',

    const completion = await openai.chat.completions.create($2);
    const text = $2;
    return res.status(200).json({ text })
  } catch (err: any) {
    console.error($2);
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}