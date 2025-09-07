import { NextApiRequest } from 'next';

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic
  return {
    id: 'user-123',
    email: 'user@example.com',
    role: 'user'
  };
}

export function requireUser(req: NextApiRequest, res: any): User | null {
  const user = parseUserFromRequest(req);
  if (!user) {
    res.status(401).json({ error: 'Authentication required' });
    return null;
  }
  return user;
}

export function requireAdmin(req: NextApiRequest, res: any): User | null {
  const user = requireUser(req, res);
  if (!user || user.role !== 'admin') {
    res.status(403).json({ error: 'Admin access required' });
    return null;
  }
  return user;
}

export function isAdminEmail(email: string): boolean {
  // Placeholder for admin email check
  return email === 'admin@example.com';
}