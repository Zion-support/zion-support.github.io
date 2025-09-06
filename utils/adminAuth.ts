// Admin authentication utility
import { NextApiRequest } from 'next';

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'super-admin';
}

export function verifyAdminToken(token: string): AdminUser | null {
  // Mock implementation - in production, verify JWT token
  if (token === 'admin-token') {
    return {
      id: 'admin-1',
      email: 'admin@ziontechgroup.com',
      role: 'admin'
    };
  }
  return null;
}

export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean; user?: AdminUser }> {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return { allowed: false };
  }
  
  const user = verifyAdminToken(token);
  if (!user) {
    return { allowed: false };
  }
  
  return { allowed: true, user };
}