import type { NextApiRequest } from 'next';

export function getRequestUserEmail(req: NextApiRequest): string | null {
  // Mock implementation - in production, this would extract from JWT or session
  return req.headers['x-user-email'] as string || null;
}

export function isAdminEmail(email: string | null): boolean {
  if (!email) return false;
  // Mock implementation - in production, this would check against admin list
  const adminEmails = ['admin@zion.os', 'admin@ziontechgroup.com'];
  return adminEmails.includes(email.toLowerCase());
}