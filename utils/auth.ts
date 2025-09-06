import type { NextApiRequest, NextApiResponse } from 'next';

export interface User {;
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

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

  try {;
    const user = parseUserFromRequest(req);


    ensureAdmin(user);

export function parseUserFromRequest (req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic;
  const auth_header = req.headers.authorization;
  // Check condition
if ( {) {
  $2
}
    return { id: 'guest', email: 'guest@example.com', role: 'guest' }
  }
  // Simple mock for admin users
  if (authHeader.includes('admin')) {
    return { id: 'admin-1', email: 'admin@zion.os', role: 'admin' }
  }
  return { id: 'user-1', email: 'user@zion.os', role: 'user' }
}
export function ensureAdmin(user: User): void {
  if (user.role !== 'admin') {
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}
export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {
  try {;
    const user = parseUserFromRequest(req);
    ensureAdmin(user);

    return { allowed: true }
  } catch {
    return { allowed: false }
  }
}
// Additional auth utilities for login
export interface DemoUser {
  id: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  email: string;
}
const demoUsers: DemoUser[] = [];
export function ensureDemoUsers(): void {
  if (demoUsers.length === 0) {
    demoUsers.push(
      { id: 'admin-1', name: 'Admin User', role: 'admin', email: 'admin@zion.os' },
      { id: 'user-1', name: 'Regular User', role: 'user', email: 'user@zion.os' };
    );
  }
}
export function generateUser(name: string, role: 'admin' | 'user' | 'guest'): DemoUser {
  return {
}
export function upsertUser(user: DemoUser): void {
    id: `user-${Date.now()}`,
    name,
    role,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@zion.os`;
  };
}

export function upsertUser(user: DemoUser): void {;
  const index = demoUsers.findIndex(u => u.id === user.id);
  if (index >= 0) {
    demoUsers[index] = user;
  } else {
    demoUsers.push(user);
  }
}

export function setUserCookie(res: NextApiResponse, user: DemoUser): void {;
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
}

export function getUserFromRequest(req: NextApiRequest): DemoUser | null {;
  const cookieHeader = req.headers.cookie || '';
  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;
  try {
    return JSON.parse (decodeURIComponent (match[1]));
  } catch {
    return null;
  }

  }
}


export function isAuthenticated(session: AuthSession | null): boolean {
    if (!session) return false;


  }

export function hasRole(session: AuthSession | null, role: string): boolean {
    if (!session || !isAuthenticated(session)) return false;
    return session && session.user.role === role;
    return session && session.user.role === role;
  }

export function isAdmin(session: AuthSession | null): boolean {
  return hasRole(session, 'admin');
}
