<<<<<<< HEAD
import type { NextApiRequest } from 'next';

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'moderator';
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
// Authentication utilities
export interface User {
  id: string, email: string,
  name: string, role: 'admin' | 'user' | 'moderator',
}

export interface AuthSession {
  user: User, token: string,
  expiresAt: number,
}

export function createAuthSession(user: User, token: string): AuthSession {
  return {
    user,
    token,
    expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };
}

export function isAuthenticated(session: AuthSession | null): boolean {
    if (!session) return false,
    return Date.now() < session.expiresAt
  }

export function hasRole(session: AuthSession | null, role: string): boolean {
    if (!session || !isAuthenticated(session)) return false,
    return session.user.role === role
  }

export function isAdmin(session: AuthSession | null): boolean {
  return hasRole(session, 'admin');
}

export function isModerator(session: AuthSession | null): boolean {
  return hasRole(session, 'moderator') || isAdmin(session);
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
