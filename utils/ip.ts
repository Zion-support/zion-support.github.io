<<<<<<< HEAD
import type { NextApiRequest } from 'next';

export function extractClientIp(req: NextApiRequest): string | null {
  const xff = (req.headers['x-forwarded-for'] as string) || '';
  const ip =
    xff.split(',')[0]?.trim() ||
    (req.headers['x-real-ip'] as string) ||
    (req.socket?.remoteAddress ?? null);
  if (!ip) return null;
  if (ip.startsWith('::ffff:')) return ip.substring(7);
  return ip;
}
=======
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
