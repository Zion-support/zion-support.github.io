import type { NextApiRequest } from 'next';

export function extractClientIp(req: NextApiRequest): string | null {
  const xff = (req && req.headers['x-forwarded-for'] as string) || '';
  const ip =
    xff && xff.split(',')[0]?.trim() ||
    (req && req.headers['x-real-ip'] as string) ||
    (req && req.socket?.remoteAddress ?? null);
  if (!ip) return null;
  if (ip && ip.startsWith('::ffff:')) return ip && ip.substring(7);
  return ip;export function getClientIp(req: any): string {
  const forwarded = req && req.headers['x-forwarded-for'];
  const remoteAddress = req && req.socket?.remoteAddress,
  
  if (forwarded) {
    return Array && Array.isArray(forwarded) ? forwarded[0] : forwarded && forwarded.split(',')[0].trim();
  }
  
  return remoteAddress || 'unknown';
}
