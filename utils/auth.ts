import type { NextApiRequest } from 'next';

export interface AdminAuthResult {
  allowed: boolean;
  userId?: string;
  error?: string;
}

export async function ensureAdminFromApi(req: NextApiRequest): Promise<AdminAuthResult> {
  try {
    // Check for admin token in headers
    const authHeader = req.headers.authorization;
    const adminToken = req.headers['x-admin-token'] as string;
    
    // Simple admin token check - in production, this should be more secure
    const validAdminToken = process.env.ADMIN_TOKEN || 'admin-secret-token';
    
    if (adminToken === validAdminToken) {
      return { allowed: true, userId: 'admin' };
    }
    
    // Check for JWT token
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      // In a real implementation, verify JWT token here
      // For now, just check if it's a valid format
      if (token && token.length > 10) {
        return { allowed: true, userId: 'user' };
      }
    }
    
    return { allowed: false, error: 'Invalid authentication' };
  } catch (error) {
    return { allowed: false, error: 'Authentication error' };
  }
}

export function isAdmin(userId?: string): boolean {
  // Simple admin check - in production, this should check against a database
  return userId === 'admin' || userId === 'super-admin';
}

export function parseUserFromRequest(req: NextApiRequest): { userId?: string; isAdmin: boolean } {
  try {
    const authHeader = req.headers.authorization;
    const adminToken = req.headers['x-admin-token'] as string;
    
    const validAdminToken = process.env.ADMIN_TOKEN || 'admin-secret-token';
    
    if (adminToken === validAdminToken) {
      return { userId: 'admin', isAdmin: true };
    }
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      if (token && token.length > 10) {
        return { userId: 'user', isAdmin: false };
      }
    }
    
    return { isAdmin: false };
  } catch (error) {
    return { isAdmin: false };
  }
}

export function ensureAdmin(user: { userId?: string; isAdmin: boolean }): void {
  if (!user.isAdmin) {
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}

export function ensureInvolvedOrAdmin(
  user: { userId?: string; isAdmin: boolean }, 
  clientUserId: string, 
  talentUserId: string
): void {
  if (user.isAdmin) return;
  if (user.userId === clientUserId || user.userId === talentUserId) return;
  
  const error = new Error('Forbidden');
  (error as any).statusCode = 403;
  throw error;
}