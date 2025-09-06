import type { NextApiRequest } from 'next';

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export function parseUserFromRequest(req: NextApiRequest): User | null {
  // Mock implementation - in real app, this would parse JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  
  // Simple mock parsing
  const token = authHeader.replace('Bearer ', '');
  if (token === 'admin-token') {
    return { id: 'admin-1', email: 'admin@zion.os', role: 'admin' };
  }
  
  return { id: 'user-1', email: 'user@zion.os', role: 'user' };
}

export function ensureAdmin(user: User | null): void {
  if (!user || user.role !== 'admin') {
    const error = new Error('Forbidden') as any;
    error.statusCode = 403;
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