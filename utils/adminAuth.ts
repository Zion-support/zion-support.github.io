import type { NextApiRequest } from 'next';

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'super-admin';
  permissions: string[];
}

export function getAdminUser(req: NextApiRequest): AdminUser | null {
  try {
    // Check for admin token in headers
    const adminToken = req.headers['x-admin-token'] as string;
    const authHeader = req.headers.authorization;
    
    // Simple admin token check - in production, this should be more secure
    const validAdminToken = process.env.ADMIN_TOKEN || 'admin-secret-token';
    
    if (adminToken === validAdminToken) {
      return {
        id: 'admin',
        email: 'admin@zion.os',
        role: 'admin',
        permissions: ['read', 'write', 'delete', 'moderate']
      };
    }
    
    // Check for JWT token
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      // In a real implementation, verify JWT token here
      if (token && token.length > 10) {
        return {
          id: 'user',
          email: 'user@zion.os',
          role: 'admin',
          permissions: ['read', 'write']
        };
      }
    }
    
    return null;
  } catch (error) {
    return null;
  }
}

export function requireAdmin(req: NextApiRequest): AdminUser {
  const user = getAdminUser(req);
  if (!user) {
    throw new Error('Admin authentication required');
  }
  return user;
}

export function hasPermission(user: AdminUser, permission: string): boolean {
  return user.permissions.includes(permission) || user.role === 'super-admin';
}