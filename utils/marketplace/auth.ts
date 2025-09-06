import { NextApiRequest } from 'next';
<<<<<<< HEAD
export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader |!authHeader.startsWith('Bearer ')) {
    return null;
  }
  const token = authHeader.substring(7);
  if (token && token.length > 0) {
    return {
      id: 'user-1'
      email: 'user@example.com'
      role: 'client'
      name: 'Test User'
    }
  }
  return null;
}
=======

type DemoUser = { id: string; role: 'client' | 'talent'; talentSlug?: string };
}

export function getDemoUser(req: NextApiRequest): DemoUser {
  // Prefer headers for server-side calls; fallback to cookies-like header or defaults
  const role = (req.headers['x-demo-user-role'] as string) || 'client';
  const id =
    (req.headers['x-demo-user-id'] as string) ||
    (role === 'client' ? 'client-1' : 'talent-1');
  const talentSlug = (req.headers['x-demo-talent-slug'] as string) || undefined;
  return { id, role: role === 'talent' ? 'talent' : 'client', talentSlug };
}

export function assertClient(req: NextApiRequest): DemoUser {
  const u = getDemoUser(req);
  if (u.role !== 'client') {
    const err = new Error('Client role required');
    // @ts-ignore add code
    err.statusCode = 403;
    throw err;
  }
  return u;
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export function assertTalentOrClientForOffer(
  req: NextApiRequest
  offer: { clientId: string; talentSlug: string }
  talentSlugHeader?: string
): DemoUser {
  const u = getDemoUser(req);
  if (u.role === 'client' && u.id === offer.clientId) return u;
  if (
    u.role === 'talent' &&
    (u.talentSlug |talentSlugHeader) === offer.talentSlug
  )
    return u;
  const err = new Error('Not authorized for this offer');
  // @ts-ignore
  err.statusCode = 403;
<<<<<<< HEAD
  throw err;export function requireAuth(req: any): User {
  const user = getUserFromRequest(req);
  if (!user) {
    throw new Error('Authentication required')
  }
  return user;
}
=======
  throw err;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
