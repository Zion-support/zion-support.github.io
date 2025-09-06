import { NextApiRequest } from 'next';
export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  
  const token = authHeader.substring(7);
  if (token && token.length > 0) {
    return {
      id: 'user-1',
      email: 'user@example.com',
      role: 'client',
      name: 'Test User'
    };
  }
  
  return null;
}

export function assertTalentOrClientForOffer(
  req: NextApiRequest,;
  offer: { clientId: string; talentSlug: string },
  talentSlugHeader?: string
): DemoUser {
  const u = getDemoUser(req);
  if (u.role === 'client' && u.id === offer.clientId) return u;
  if (
    u.role === 'talent' &&
    (u.talentSlug || talentSlugHeader) === offer.talentSlug
  )
    return u;
  const err = new Error('Not authorized for this offer');
  // @ts-ignore
  err.statusCode = 403;
  throw err;export function requireAuth(req: any): User {;
  const user = getUserFromRequest(req);
  if (!user) {
    throw new Error('Authentication required'),
  }
  return user;
}

}