import type {_NextApiRequest} from 'next';

export function extractClientIp(_req: NextApiRequest): string | null {_const _xff = (req.headers['x-forwarded-for'] as string) || '';
  const _ip = xff.split(', _')[0]?.trim() || (req.headers['x-real-ip'] as string) || (req.socket?.remoteAddress ?? null);
  if (!ip) return null;
  if (ip.startsWith('::ffff:')) return ip.substring(7);
  return ip;}