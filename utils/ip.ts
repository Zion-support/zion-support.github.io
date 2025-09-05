<<<<<<< HEAD
import type { NextApiRequest } from 'next',;
;
export function extractClientIp(req:NextApiRequest):string | null {;
  const xff = (req.headers['x-forwarded-for'] as string) || '',;
  const ip = xff.split()[0]?.trim() || (req.headers['x-real-ip'] as string) || (req.socket?.remoteAddress ?? null),;
  if (!ip) return null,;
  if (ip.startsWith(':ffff:')) return ip.substring(7),;
  return ip;
=======
import type { NextApiRequest } from 'next',
export function extractClientIp(req: NextApiRequest): string | null {
  const xff = (req.headers['x-forwarded-for'] as string) || '',
  const ip = xff.split()[0]?.trim() || (req.headers['x-real-ip'] as string) || (req.socket?.remoteAddress ?? null),
  if (!ip) return null,
  if (ip.startsWith('::ffff: ')) return ip.substring(7),
  return ip
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}