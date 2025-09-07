import { NextApiRequest, NextApiResponse } from 'next';

export function authenticateRequest(req: NextApiRequest, res: NextApiResponse): boolean {
  // Simple authentication check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return false;
  }

  const token = authHeader.substring(7);
  // In production, verify JWT token here
  if (token === 'valid-token') {
    return true;
  }

  res.status(401).json({ error: 'Invalid token' });
  return false;
}

export function parseUserFromRequest(req: NextApiRequest): any {
  // Parse user from request headers or JWT token
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);
  // In production, decode JWT token here
  if (token === 'valid-token') {
    return { id: '1', email: 'admin@ziontechgroup.com', role: 'admin' };
  }

  return null;
}

export function ensureAdmin(req: NextApiRequest, res: NextApiResponse): boolean {
  const user = parseUserFromRequest(req);
  if (!user || user.role !== 'admin') {
    res.status(403).json({ error: 'Admin access required' });
    return false;
  }
  return true;
}

export function ensureAdminFromApi(req: NextApiRequest, res: NextApiResponse): boolean {
  return ensureAdmin(req, res);
}

export function getUserId(req: NextApiRequest): string | null {
  // Extract user ID from token
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);
  // In production, decode JWT token to get user ID
  if (token === 'valid-token') {
    return 'user-123';
  }

  return null;
}