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