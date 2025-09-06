<<<<<<< HEAD


=======
import type { NextApiRequest } from 'next';
export function extractClientIp(req: NextApiRequest): string | null {
  const xff = (req.headers['x-forwarded-for'] as string) |'';

export function extractClientIp(req: NextApiRequest): string | null {;
  const xff = (req.headers['x-forwarded-for'] as string) || '';
  const ip =
    xff.split(',')[0]?.trim() |
    (req.headers['x-real-ip'] as string) |
    (req.socket?.remoteAddress ?? null);
  if (!ip) return null;
  if (ip.startsWith('::ffff:')) return ip.substring(7);
  return ip;
}

export function getClientIp(req: any): string {

export function getClientIp(req: any): string {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const forwarded = req.headers['x-forwarded-for'];
  const remoteAddress = req.socket?.remoteAddress;
  if (forwarded) {
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim();
  }
<<<<<<< HEAD



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  return remoteAddress |'unknown';
}




>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
