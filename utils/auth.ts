import type { NextApiRequest } from 'next';

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  isAdmin: boolean;
}

export function parseUserFromRequest(req: NextApiRequest): User {
  // For now, return a mock admin user
  // In a real implementation, this would parse JWT tokens or session data
  return {
    id: 'admin-1',
    email: 'admin@ziontechgroup.com',
    role: 'admin',
    isAdmin: true
  };
}

export function ensureAdmin(user: User): void {
  if (!user || !user.isAdmin) {
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}

export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean; user?: User }> {
  try {
    const user = parseUserFromRequest(req);
    ensureAdmin(user);
    return { allowed: true, user };
  } catch (error) {
    return { allowed: false };
  }
}

// Additional functions for auth system
export function ensureDemoUsers(): void {
  // Mock function for demo users
}

export function generateUser(name: string, role: string): User {
  return {
    id: `user_${Date.now()}`,
    email: `${name.toLowerCase()}@example.com`,
    role: role as 'admin' | 'user' | 'guest',
    isAdmin: role === 'admin'
  };
}

export function upsertUser(user: User): void {
  // Mock function for user storage
}

export function setUserCookie(res: any, user: User): void {
  // Mock function for setting user cookie
}

export function clearUserCookie(res: any): void {
  // Mock function for clearing user cookie
}

export function getUserFromRequest(req: NextApiRequest): User | null {
  // Mock function for getting user from request
  return {
    id: 'user-1',
    email: 'user@example.com',
    role: 'user',
    isAdmin: false
  };
}