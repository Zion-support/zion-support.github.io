import { NextApiRequest, NextApiResponse } from 'next';

export interface User {
  id: string;
  email: string;
  role: string;
  isAdmin: boolean;
}

export class AuthError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 401) {
    super(message);
    this.name = 'AuthError';
    this.statusCode = statusCode;
  }
}

export function parseUserFromRequest(req: NextApiRequest): User | null {
  // Mock implementation: In a real app, this would parse a JWT or session cookie
  // For now, let's assume an admin user if a specific header is present for testing
  if (req.headers['x-admin-secret'] === process.env.ADMIN_SECRET) {
    return { id: 'admin-user', email: 'admin@example.com', role: 'admin', isAdmin: true };
  }
  // For other users, return a non-admin user or null
  return { id: 'test-user', email: 'user@example.com', role: 'user', isAdmin: false };
}

export function ensureAdmin(user: User | null): asserts user is User & { isAdmin: true } {
  if (!user || !user.isAdmin) {
    throw new AuthError('Forbidden: Admin access required', 403);
  }
}

export async function ensureAdminFromApi(req: NextApiRequest, res: NextApiResponse): Promise<{ allowed: boolean }> {
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
    return { allowed: true };
  } catch (e: any) {
    res.status(e.statusCode || 403).json({ error: 'Forbidden' });
    return { allowed: false };
  }
}

export function getSessionFromReq(req: NextApiRequest): any {
  // Mock implementation
  return null;
}

export function isInternalAgentRequest(req: NextApiRequest): boolean {
  // Mock implementation
  return false;
}

export function clearUserCookie(res: NextApiResponse) {
  // Mock implementation
  res.setHeader('Set-Cookie', 'user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
}

export function getUserFromRequest(req: NextApiRequest): User | null {
  return parseUserFromRequest(req);
}
