import type { NextApiRequest } from 'next';

export interface User {
  id: string;
  email: string;
  role: string;
}

<<<<<<< HEAD
export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const admins = (process.env.ADMIN_EMAILS || '')
    .split(',')
    .map(e => e.trim().toLowerCase())
    .filter(Boolean);
  return admins.includes(email.toLowerCase());
=======
export function parseUserFromRequest(req: NextApiRequest): User | null {
  // Mock implementation - in a real app, this would parse JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  
  // Simple mock user for development
  return {
    id: 'mock-user-id',
    email: 'admin@zion.os',
    role: 'admin'
  };
}

export function ensureAdmin(user: User | null): void {
  if (!user || user.role !== 'admin') {
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}

export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {
  try {
    const user = parseUserFromRequest(req);
    ensureAdmin(user);
    return { allowed: true };
  } catch {
    return { allowed: false };
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
