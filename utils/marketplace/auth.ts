import { NextApiRequest, NextApiResponse } from 'next';

export interface User {
  id: string;
  email: string;
  role: 'client' | 'talent';
  name?: string;
}

export function getUser(req: NextApiRequest): User | null {
  // In a real app, this would validate JWT tokens or session data
  // For now, we'll use a simple header-based approach
  const userId = req.headers['x-user-id'] as string;
  const userEmail = req.headers['x-user-email'] as string;
  const userRole = req.headers['x-user-role'] as 'client' | 'talent';
  
  if (!userId || !userEmail || !userRole) {
    return null;
  }
  
  return {
    id: userId,
    email: userEmail,
    role: userRole,
    name: req.headers['x-user-name'] as string
  };
}

export function requireAuth(req: NextApiRequest, res: NextApiResponse): User | null {
  const user = getUser(req);
  if (!user) {
    res.status(401).json({ error: 'Unauthorized' });
    return null;
  }
  return user;
}

export function requireRole(user: User, role: 'client' | 'talent'): boolean {
  return user.role === role;
}