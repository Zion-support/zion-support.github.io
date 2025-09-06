import type { NextApiRequest } from 'next';

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'super_admin';
  permissions: string[];
}

export function getAdminUser(req: NextApiRequest): AdminUser | null {
  // Mock implementation - in a real app, this would parse JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return null;
  }
  
  // Mock admin user for testing
  return {
    id: 'admin-1',
    email: 'admin@zion.os',
    role: 'admin',
    permissions: ['read', 'write', 'delete']
  };
}

export function requireAdmin(req: NextApiRequest): AdminUser {
  const user = getAdminUser(req);
  if (!user) {
    throw new Error('Unauthorized');
  }
  return user;
}