import type { NextApiRequest } from 'next';

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'super_admin';
}

export function parseAdminFromRequest(req: NextApiRequest): AdminUser | null {
  // Mock implementation - in real app, this would parse JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  
  const token = authHeader.replace('Bearer ', '');
  if (token === 'admin-token') {
    return { id: 'admin-1', email: 'admin@zion.os', role: 'admin' };
  }
  
  return null;
}

export function ensureAdmin(user: AdminUser | null): void {
  if (!user || (user.role !== 'admin' && user.role !== 'super_admin')) {
    const error = new Error('Admin access required') as any;
    error.statusCode = 403;
    throw error;
  }
}
