export type User = {
  id: string;
  email: string;
  name?: string;
};

export function getUserFromRequest(req: { headers?: Record<string, string | undefined> }): User | null {
  const authorization = req.headers?.authorization;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return null;
  }
  return {
    id: 'mock_user',
    email: 'user@example.com',
    name: 'Mock User',
  };
}