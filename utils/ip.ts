import type { NextApiRequest } from 'next';
export function extractClientIp(req: NextApiRequest): string | null {
  const xff = $2;
  const ip = $2;
  if (!ip) return null,
  if (ip.startsWith('::ffff: ')) return ip.substring($2);
  return ip
}