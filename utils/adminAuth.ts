/**
 * Admin authentication utilities
 */

import { NextApiRequest } from 'next';

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'super_admin';
  permissions: string[];
  createdAt: string;
  lastLoginAt?: string;
}

export interface AdminAuthResult {
  allowed: boolean;
  user?: AdminUser;
  error?: string;
}

export function isAdminUser(user: any): user is AdminUser {
  return user && 
         typeof user === 'object' && 
         typeof user.id === 'string' &&
         typeof user.email === 'string' &&
         ['admin', 'super_admin'].includes(user.role);
}

export function hasPermission(user: AdminUser, permission: string): boolean {
  return user.permissions.includes(permission) || user.role === 'super_admin';
}

export function requirePermission(user: AdminUser, permission: string): void {
  if (!hasPermission(user, permission)) {
    throw new Error(`Permission '${permission}' required`);
  }
}

export async function ensureAdminFromApi(req: NextApiRequest): Promise<AdminAuthResult> {
  try {
    // Check for admin token in headers
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { allowed: false, error: 'No authorization header' };
    }

    const token = authHeader.slice(7);
    
    // In a real implementation, verify the JWT token
    // For now, check against environment variable
    if (token !== process.env.ADMIN_API_TOKEN) {
      return { allowed: false, error: 'Invalid admin token' };
    }

    // Mock admin user - in real implementation, decode from JWT
    const adminUser: AdminUser = {
      id: 'admin-1',
      email: 'admin@zion.os',
      role: 'super_admin',
      permissions: ['*'], // All permissions
      createdAt: new Date().toISOString()
    };

    return { allowed: true, user: adminUser };
  } catch (error) {
    return { allowed: false, error: 'Authentication failed' };
  }
}

export function parseUserFromRequest(req: NextApiRequest): AdminUser | null {
  try {
    // In a real implementation, parse JWT from request
    // For now, return null to indicate no user
    return null;
  } catch (error) {
    return null;
  }
}

export function ensureAdmin(user: AdminUser | null): AdminUser {
  if (!user) {
    const error = new Error('Authentication required');
    (error as any).statusCode = 401;
    throw error;
  }
  return user;
}