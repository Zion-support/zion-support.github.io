import type { NextApiRequest } from 'next';

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - in a real app, this would parse JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return { id: 'guest', email: 'guest@example.com', role: 'guest' };
  }
  
  // Mock admin user for testing
  return { id: 'admin', email: 'admin@zion.os', role: 'admin' };
}

export function ensureAdmin(user: User): void {
  if (user.role !== 'admin') {
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