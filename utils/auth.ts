import type { NextApiRequest, NextApiResponse } from 'next';

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export class AuthError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 401) {
    super(message);
    this.name = 'AuthError';
    this.statusCode = statusCode;
  }
}

export function getRequestUserEmail(req: NextApiRequest): string | null {
  const emailHeader = req.headers['x-user-email'];
  if (typeof emailHeader === 'string') return emailHeader;
  return null;
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const admins = (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
  return admins.includes(email.toLowerCase());
}

export function parseUserFromRequest(req: NextApiRequest): User | null {
  const email = getRequestUserEmail(req);
  if (!email) return null;
  return { id: email, email, role: isAdminEmail(email) ? 'admin' : 'user' };
}

export function ensureAdmin(user: User | null): asserts user is User {
  if (!user || user.role !== 'admin') {
    throw new AuthError('Forbidden', 403);
  }
}

export async function ensureAdminFromApi(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<{ allowed: boolean }> {
  try {
    const user = parseUserFromRequest(req);
    ensureAdmin(user);
    return { allowed: true };
  } catch (e: any) {
    res.status(e?.statusCode || 403).json({ error: 'Forbidden' });
    return { allowed: false };
  }
}
