<<<<<<< HEAD
import type { NextApiRequest } from 'next';
<<<<<<< HEAD
export function extractClientIp(req: NextApiRequest): string | null {
  const xff = (req.headers['x-forwarded-for'] as string) |'';
=======

export function extractClientIp(req: NextApiRequest): string | null {;
  const xff = (req.headers['x-forwarded-for'] as string) || '';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const ip =
    xff.split(',')[0]?.trim() |
    (req.headers['x-real-ip'] as string) |
    (req.socket?.remoteAddress ?? null);
  if (!ip) return null;
  if (ip.startsWith('::ffff:')) return ip.substring(7);
  return ip;
}
<<<<<<< HEAD
export function getClientIp(req: any): string {
=======

export function getClientIp(req: any): string {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const forwarded = req.headers['x-forwarded-for'];
  const remoteAddress = req.socket?.remoteAddress;
  if (forwarded) {
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim();
  }



>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
