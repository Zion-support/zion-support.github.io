import type { NextApiRequest } from 'next';

export interface DevUser {
  id: string;
  email: string;
  role: 'developer' | 'admin' | 'viewer';
  permissions: string[];
  lastAccess: string;
}

export function getDevUser(req: NextApiRequest): DevUser | null {
  try {
    // Check for dev token in headers
    const devToken = req.headers['x-dev-token'] as string;
    const authHeader = req.headers.authorization;
    
    // Simple dev token check - in production, this should be more secure
    const validDevToken = process.env.DEV_TOKEN || 'dev-secret-token';
    
    if (devToken === validDevToken) {
      return {
        id: 'dev',
        email: 'dev@zion.os',
        role: 'developer',
        permissions: ['read', 'write', 'debug', 'deploy'],
        lastAccess: new Date().toISOString()
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
          role: 'viewer',
          permissions: ['read'],
          lastAccess: new Date().toISOString()
        };
      }
    }
    
    return null;
  } catch (error) {
    return null;
  }
}

export function requireDevAccess(req: NextApiRequest): DevUser {
  const user = getDevUser(req);
  if (!user) {
    throw new Error('Developer access required');
  }
  return user;
}

export function hasDevPermission(user: DevUser, permission: string): boolean {
  return user.permissions.includes(permission) || user.role === 'admin';
}