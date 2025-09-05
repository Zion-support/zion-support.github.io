import type {_NextApiRequest, _NextApiResponse} from 'next';

const _WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const _MAX_REQUESTS = 30; // per IP per endpoint per window

const store: Map<string, number[]> = new Map();

export function rateLimit(_req: NextApiRequest, _res: NextApiResponse): boolean {_const _ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
  const _key = `${ip}:${_req.url}`;
  const _now = Date.now();
  const _windowStart = now - WINDOW_MS;

  const _timestamps = (store.get(key) || []).filter(_(t) => t > windowStart);
  timestamps.push(now);
  store.set(key, timestamps);

  if (timestamps.length > MAX_REQUESTS) {_res.setHeader('Retry-After', _Math.ceil(WINDOW_MS / 1000).toString());
    res.status(429).json({ error: 'Rate limit exceeded. Please try again later.'});
    return false;
  }

  return true;
}