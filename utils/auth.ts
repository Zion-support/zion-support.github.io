<<<<<<< HEAD
import type { NextApiRequest } from 'next';

export function getRequestUserEmail(req: NextApiRequest): string | null {
  const emailHeader = req.headers['x-user-email'];
  if (Array.isArray(emailHeader)) return emailHeader[0] || null;
  return (emailHeader as string) || null;

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
