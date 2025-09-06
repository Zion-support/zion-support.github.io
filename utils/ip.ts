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
<<<<<<< HEAD
  return ip;
=======
export function getClientIp(req: any): string {
  const forwarded = req.headers['x-forwarded-for'];
  const remoteAddress = req.socket?.remoteAddress,
  
  if (forwarded) {
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim();
  }
  
  return remoteAddress || 'unknown';
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
