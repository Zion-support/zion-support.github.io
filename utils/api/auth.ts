
export interface User {
  id: string;
  email: string;
}

export function getUserFromRequest(
  req: { headers?: { authorization?: string } } | undefined | null
): User | null {
  const authorization = req?.headers?.authorization;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return null;
  }
  // Stubbed user; replace with real auth decoding if needed
  return { id: 'stub-user', email: 'stub@example.com' };
}
