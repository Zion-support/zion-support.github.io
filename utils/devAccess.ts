import type { NextApiRequest } from 'next';

export function requireDevAccess(req: NextApiRequest): boolean {
  // In a real implementation, this would check for proper authentication
  // For now, we'll allow access if the request has a dev header
  const devKey = req.headers['x-dev-key'] as string;
  const expectedKey = process.env.DEV_ACCESS_KEY || 'dev-key-123';
  
  return devKey === expectedKey;
}

export function requireAdminAccess(req: NextApiRequest): boolean {
  // In a real implementation, this would check for admin authentication
  // For now, we'll allow access if the request has an admin header
  const adminKey = req.headers['x-admin-key'] as string;
  const expectedKey = process.env.ADMIN_ACCESS_KEY || 'admin-key-123';
  
  return adminKey === expectedKey;
}

export function getClientIP(req: NextApiRequest): string {
  return (req.headers['x-forwarded-for'] as string) || 
         (req.socket.remoteAddress as string) || 
         'unknown';
}