export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  name?: string;
}

export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  
  const token = authHeader.substring(7);
  if (token && token.length > 0) {
    return {
      id: 'user-1',
      email: 'user@example.com',
      role: 'user',
      name: 'Test User'
    };
  }
  
  return null;
}

export function requireAuth(req: any): User {
  const user = getUserFromRequest(req);
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
}
