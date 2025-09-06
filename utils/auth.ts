import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { User, UserRole } from './messaging/types';

export interface User {
  id: string;
  email: string;
  role?: string;
  isAdmin?: boolean;
}

export function parseUserFromRequest(req: NextApiRequest): User | null {
  // This is a placeholder implementation
  // In a real application, you would parse the user from the request headers, cookies, or JWT tokens
  const userId = req.headers['x-user-id'] as string;
  const userEmail = req.headers['x-user-email'] as string;
  const userRole = req.headers['x-user-role'] as string;
  
  if (!userId || !userEmail) {
    return null;
  }
  
  return {
    id: userId,
    email: userEmail,
    role: userRole,
    isAdmin: userRole === 'admin'
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

export function getSessionFromReq(req: NextApiRequest): User | null {
  return parseUserFromRequest(req);
}

export function isInternalAgentRequest(req: NextApiRequest): boolean {
  const userAgent = req.headers['user-agent'] || '';
  return userAgent.includes('internal-agent') || userAgent.includes('zion-bot');
}

// Additional auth functions for the login/logout endpoints
const users: User[] = [];

export function ensureDemoUsers(): void {
  if (users.length === 0) {
    users.push({
      id: 'demo-admin',
      name: 'Demo Admin',
      role: 'admin',
      email: 'admin@demo.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    users.push({
      id: 'demo-user',
      name: 'Demo User',
      role: 'user',
      email: 'user@demo.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
  }
}

export function generateUser(name: string, role: UserRole): User {
  return {
    id: uuidv4(),
    name,
    role,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@demo.com`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

export function upsertUser(user: User): void {
  const existingIndex = users.findIndex(u => u.id === user.id);
  if (existingIndex >= 0) {
    users[existingIndex] = { ...user, updatedAt: new Date().toISOString() };
  } else {
    users.push(user);
  }
}

export function setUserCookie(res: NextApiResponse, user: User): void {
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly; SameSite=Strict`);
}

export function clearUserCookie(res: NextApiResponse): void {
  res.setHeader('Set-Cookie', 'user=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0');
}