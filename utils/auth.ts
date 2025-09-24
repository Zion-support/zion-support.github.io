import type { NextApiRequest, NextApiResponse } from 'next';

export type UserRole = 'admin' | 'user' | 'guest';
export type User = { id: string; email: string; role: UserRole };

export function parseUserFromRequest(req: NextApiRequest): User {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return { id: 'guest', email: 'guest@example.com', role: 'guest' };
  }
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

export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {
  try {
    const user = parseUserFromRequest(req);
    ensureAdmin(user);
    return { allowed: true };
  } catch {
    return { allowed: false };
  }
}

export interface DemoUser { id: string; name: string; role: UserRole; email: string }
const demoUsers: DemoUser[] = [];

export function ensureDemoUsers(): void {
  if (demoUsers.length === 0) {
    demoUsers.push(
      { id: 'admin-1', name: 'Admin User', role: 'admin', email: 'admin@zion.os' },
      { id: 'user-1', name: 'Regular User', role: 'user', email: 'user@zion.os' },
    );
  }
}

export function generateUser(name: string, role: UserRole): DemoUser {
  return {
    id: `user-${Date.now()}`,
    name,
    role,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@zion.os`,
  };
}

export function upsertUser(user: DemoUser): void {
  const index = demoUsers.findIndex(u => u.id === user.id);
  if (index >= 0) {
    demoUsers[index] = user;
  } else {
    demoUsers.push(user);
  }
}

export function setUserCookie(res: NextApiResponse, user: DemoUser): void {
  res.setHeader('Set-Cookie', `user=${encodeURIComponent(JSON.stringify(user))}; Path=/; HttpOnly`);
}

export function getUserFromRequest(req: NextApiRequest): DemoUser | null {
  const cookieHeader = req.headers.cookie || '';
  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;
  const group: string = match[1] as string;
  try {
    return JSON.parse(decodeURIComponent(group));
  } catch {
    return null;
  }
}
