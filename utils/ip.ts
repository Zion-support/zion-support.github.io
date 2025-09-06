<<<<<<< HEAD

import type { NextApiRequest } from 'next';

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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


  const forwarded = req.headers['x-forwarded-for'];
  const remoteAddress = req.socket?.remoteAddress;
  if (forwarded) {
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim();
  }
  return remoteAddress |'unknown';
}




<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
