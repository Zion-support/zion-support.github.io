import type { NextApiRequest } from 'next';

export interface User {
  id: string;
  email: string;
  role: string;
}

export function getRequestUserEmail(req: NextApiRequest): string | null {
  const emailHeader = req.headers['x-user-email'];
  if (typeof emailHeader === 'string') {
    return emailHeader;
  }
  return null;
}

export function parseUserFromRequest(req: NextApiRequest): User | null {
  const email = getRequestUserEmail(req);
  if (!email) return null;
  
  return {
    id: email,
    email: email,
    role: isAdmin(email) ? 'admin' : 'user'
  };
}

export function isAdmin(email: string): boolean {
  const admins = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
  return admins.includes(email.toLowerCase());
}
