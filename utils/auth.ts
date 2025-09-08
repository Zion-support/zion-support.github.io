import type { NextApiRequest } from 'next';

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean; user?: AdminUser }> {
  // This is a placeholder implementation
  // In a real application, you would verify JWT tokens, check database permissions, etc.
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { allowed: false };
  }

  // For now, we'll just check if the token exists
  // In production, you would verify the JWT token here
  const token = authHeader.substring(7);
  
  if (!token) {
    return { allowed: false };
  }

  // Mock admin user for development
  return {
    allowed: true,
    user: {
      id: 'admin-1',
      email: 'admin@zion.os',
      role: 'admin'
    }
  };
}

export function parseUserFromRequest(req: NextApiRequest): AdminUser | null {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);
  
  if (!token) {
    return null;
  }

  // Mock user for development
  return {
    id: 'user-1',
    email: 'user@zion.os',
    role: 'admin'
  };
}

export function ensureAdmin(user: AdminUser | null): void {
  if (!user || user.role !== 'admin') {
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}