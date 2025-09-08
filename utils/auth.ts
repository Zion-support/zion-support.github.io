import type { NextApiRequest } from 'next';

export interface User {
  id: string;
  email: string;
  role: string;
  isAdmin: boolean;
}

export function parseUserFromRequest(req: NextApiRequest): User | null {
  // Basic implementation - in production, this would parse from JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  
  try {
    // Mock user for development
    return {
      id: '1',
      email: 'admin@example.com',
      role: 'admin',
      isAdmin: true
    };
  } catch {
    return null;
  }
}

export function ensureAdmin(user: User | null): void {
  if (!user || !user.isAdmin) {
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}

export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
    return { allowed: true };
  } catch {
    return { allowed: false };
  }
}