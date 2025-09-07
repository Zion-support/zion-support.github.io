<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

export function authenticateRequest(req: NextApiRequest, res: NextApiResponse): boolean {
  // Simple authentication check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return false;
  }

  const token = authHeader.substring(7);
  // In production, verify JWT token here
  if (token === 'valid-token') {
    return true;
  }

  res.status(401).json({ error: 'Invalid token' });
  return false;
}

export function getUserId(req: NextApiRequest): string | null {
  // Extract user ID from token
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);
  // In production, decode JWT token to get user ID
  if (token === 'valid-token') {
    return 'user-123';
  }

  return null;
}

export function getRequestUserEmail(req: NextApiRequest): string | null {
  const emailHeader = req.headers['x-user-email'];
  if (Array.isArray(emailHeader)) return emailHeader[0] || null;
  return (emailHeader as string) || null;
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const admins = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
  return admins.includes(email.toLowerCase());
}

export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean; email?: string }> {
  const email = getRequestUserEmail(req);
  const isAdmin = isAdminEmail(email);
  return { allowed: isAdmin, email: email || undefined };
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export interface DemoUser {
  id: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  email: string;
}

export interface AuthSession {
  user: User;
  expires: string;
}

const demoUsers: DemoUser[] = [];

export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return { id: 'guest', email: 'guest@example.com', role: 'guest' };
  }
  
  // Simple mock for admin users
  if (authHeader.includes('admin')) {
    return { id: 'admin-1', email: 'admin@zion.os', role: 'admin' };
  }
  
  return { id: 'user-1', email: 'user@zion.os', role: 'user' };
}

export function ensureAdmin(user: User): void {
  if (user.role !== 'admin') {
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}

export async function ensureAdminFromApi(
  req: NextApiRequest,
): Promise<{ allowed: boolean }> {
  try {
    const user = parseUserFromRequest(req);
    ensureAdmin(user);
    return { allowed: true };
  } catch {
    return { allowed: false };
  }
}

export function ensureDemoUsers(): void {
  if (demoUsers.length === 0) {
    demoUsers.push(
      {
        id: 'admin-1',
        name: 'Admin User',
        role: 'admin',
        email: 'admin@zion.os',
      },
      {
        id: 'user-1',
        name: 'Regular User',
        role: 'user',
        email: 'user@zion.os',
      },
    );
  }
}

export function generateUser(
  name: string,
  role: 'admin' | 'user' | 'guest',
): DemoUser {
  return {
    id: `user-${Date.now()}`,
    name,
    role,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@zion.os`,
  };
}

export function upsertUser(user: DemoUser): void {
  const index = demoUsers.findIndex((u) => u.id === user.id);
  if (index >= 0) {
    demoUsers[index] = user;
  } else {
    demoUsers.push(user);
  }
}

export function setUserCookie(res: NextApiResponse, user: DemoUser): void {
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
}

export function getUserFromRequest(req: NextApiRequest): DemoUser | null {
  const cookieHeader = req.headers.cookie || '';
  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;
  
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
}

export function isAuthenticated(session: AuthSession | null): boolean {
  if (!session) return false;
  return !!session.user;
}

export function isAdmin(session: AuthSession | null): boolean {
  return hasRole(session, 'admin');
}

export function isModerator(session: AuthSession | null): boolean {
  return hasRole(session, 'moderator') || isAdmin(session);
}

export function hasRole(session: AuthSession | null, role: string): boolean {
  if (!session?.user) return false;
  return session.user.role === role;
>>>>>>> origin/chore/fix-lint-and-merge
}