import { NextApiRequest, NextApiResponse } from 'next';

export interface User {
  id: string;
  email: string;
  name?: string;
  isAdmin?: boolean;
}

export function parseUserFromRequest(req: NextApiRequest): User | null {
  // Simple demo user parsing - in production this would use proper authentication
  const userId = req.headers['x-user-id'] as string;
  const userEmail = req.headers['x-user-email'] as string;
  
  if (!userId || !userEmail) {
    return null;
  }
  
  return {
    id: userId,
    email: userEmail,
    name: req.headers['x-user-name'] as string,
    isAdmin: userEmail === 'admin@ziontechgroup.com'
  };
}

export function ensureAdmin(user: User | null): void {
  if (!user || !user.isAdmin) {
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}

export function ensureInvolvedOrAdmin(user: User | null, involvedUserIds: string[]): void {
  if (!user) {
    const error = new Error('Unauthorized');
    (error as any).statusCode = 401;
    throw error;
  }
  
  if (!user.isAdmin && !involvedUserIds.includes(user.id)) {
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}

export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {
  const user = parseUserFromRequest(req);
  if (!user || !user.isAdmin) {
    return { allowed: false };
  }
  return { allowed: true };
}

export function requireUser(req: NextApiRequest): User {
  const user = parseUserFromRequest(req);
  if (!user) {
    const error = new Error('Unauthorized');
    (error as any).statusCode = 401;
    throw error;
  }
  return user;
}

export function getUserFromRequest(req: NextApiRequest): User | null {
  return parseUserFromRequest(req);
}

export function isAdminEmail(email: string): boolean {
  return email === 'admin@ziontechgroup.com';
}

export function getRequestUserEmail(req: NextApiRequest): string | null {
  return req.headers['x-user-email'] as string || null;
}

export function generateUser(email: string, name?: string): User {
  return {
    id: Math.random().toString(36).substr(2, 9),
    email,
    name,
    isAdmin: email === 'admin@ziontechgroup.com'
  };
}

export function setUserCookie(res: NextApiResponse, user: User): void {
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
}

export function clearUserCookie(res: NextApiResponse): void {
  res.setHeader('Set-Cookie', 'user=; Path=/; HttpOnly; Max-Age=0');
}

export function ensureDemoUsers(): void {
  // Demo function - in production this would set up demo users
}