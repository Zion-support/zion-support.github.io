import type { NextApiRequest } from 'next';

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'moderator';
}

export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean; user?: AdminUser }> {
  // In a real implementation, this would verify JWT tokens, check database permissions, etc.
  // For now, we'll simulate admin access
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return { allowed: false };
  }

  // Simulate token validation
  const token = authHeader.substring(7);
  
  // For development purposes, accept any non-empty token
  if (token && token.length > 0) {
    return {
      allowed: true,
      user: {
        id: 'admin-1',
        email: 'admin@zion.os',
        role: 'admin'
      }
    };
  }

  return { allowed: false };
}

export function getUserIdFromRequest(req: NextApiRequest): string | null {
  // In a real implementation, this would extract user ID from JWT token
  return 'user-1';
}

export function parseUserFromRequest(req: NextApiRequest): AdminUser | null {
  // In a real implementation, this would parse user from JWT token
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);
  
  if (token && token.length > 0) {
    return {
      id: 'admin-1',
      email: 'admin@zion.os',
      role: 'admin'
    };
  }

  return null;
}

export function ensureAdmin(user: AdminUser | null): void {
  if (!user || user.role !== 'admin') {
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}