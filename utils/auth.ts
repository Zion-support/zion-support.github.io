import type { NextApiRequest } from 'next';

export interface User {
  id: string;
  email: string;
  role?: string;
}

export function parseUserFromRequest(req: NextApiRequest): User | null {
  // Basic implementation - in a real app, this would parse JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  
  // Mock user for now
  return {
    id: '1',
    email: 'admin@example.com',
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
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
    return { allowed: true };
  } catch {
    return { allowed: false };
  }
}

export function ensureDemoUsers(): void {
  // Mock implementation - in a real app, this would ensure demo users exist
}

export function generateUser(name: string, role: string): User {
  return {
    id: Math.random().toString(36).substr(2, 9),
    email: `${name.toLowerCase()}@example.com`,
    role: role as any
  };
}

export function upsertUser(user: User): void {
  // Mock implementation - in a real app, this would save user to database
}

export function setUserCookie(res: any, user: User): void {
  // Mock implementation - in a real app, this would set user cookie
}

export function clearUserCookie(res: any): void {
  // Mock implementation - in a real app, this would clear user cookie
}

export function getUserFromRequest(req: NextApiRequest): User | null {
  return parseUserFromRequest(req);
}