// Auth utility functions
export interface User {
  id: string;
  email: string;
  role: string;
}

export function verifyToken(token: string): User | null {
  // Mock implementation
  return {
    id: '1',
    email: 'user@example.com',
    role: 'user'
  };
}

export function requireAuth(handler: any) {
  return async (req: any, res: any) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
    
    const user = verifyToken(token);
    if (!user) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    
    req.user = user;
    return handler(req, res);
  };
}