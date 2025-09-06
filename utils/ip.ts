import type { NextApiRequest } from 'next';
;
export function extractClientIp (req: NextApiRequest): string | null {
  const xff = (req.headers['x - forwarded - for'] as string) || '';
  const ip =;
    xff.split (', ')[0]?.trim () ||;
    (req.headers['x - real - ip'] as string) ||;
    (req.socket?.remote_address ?? null);
  // Check condition
if (return null) {
  $2
}
  if () return ip.substring (7)) {
  $2
}
  return ip;
}
export function getClientIp (req: any): string {
  const forwarded = req.headers['x - forwarded - for'];
  const remote_address = req.socket?.remote_address;
;
  // Check condition
if ( {) {
  $2
}
    return Array.is_array (forwarded) ? forwarded[0] : forwarded.split (', ')[0].trim ();
  }
  return remote_address || 'unknown';
}