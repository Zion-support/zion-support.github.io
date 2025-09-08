import type { NextApiRequest, NextApiResponse } from 'next';
import { UserRole } from './messaging/types';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  isAdmin: boolean;
}

export function parseUserFromRequest(req: NextApiRequest): User | null {
  // Mock implementation - in a real app, this would parse JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  
  // Mock user for development
  return {
    id: 'admin-1',
    email: 'admin@ziontechgroup.com',
    name: 'Admin User',
    role: 'admin',
    isAdmin: true
  };
}

export function ensureAdmin(user: User | null): void {
  if (!user || !user.isAdmin) {
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}

export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {
  const user = parseUserFromRequest(req);
  return { allowed: user?.isAdmin || false };
}

export function getUserFromRequest(req: NextApiRequest): User | null {
  return parseUserFromRequest(req);
}

export function generateUser(name: string, role: UserRole): User {
  return {
    id: `user-${Date.now()}`,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@example.com`,
    name,
    role,
    isAdmin: role === 'admin'
  };
}

export function upsertUser(user: User): void {
  // Mock implementation - in a real app, this would save to database
  console.log('Upserting user:', user);
}

export function setUserCookie(res: NextApiResponse, user: User): void {
  // Mock implementation - in a real app, this would set a secure cookie
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; HttpOnly; Path=/; SameSite=Lax`);
}

export function clearUserCookie(res: NextApiResponse): void {
  res.setHeader('Set-Cookie', 'user=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0');
}

export function ensureDemoUsers(): void {
  // Mock implementation - in a real app, this would ensure demo users exist
  console.log('Ensuring demo users exist');
}