import { NextApiRequest } from 'next';

export interface User {
  id: string;
  email: string;
  role: 'client' | 'talent' | 'admin';
  name: string;
  talentSlug?: string;
}

export interface DemoUser extends User {
  talentSlug?: string;
}

export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session
<<<<<<< HEAD
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
=======
  const authHeader = req && req.headers.authorization;
  if (!authHeader || !authHeader && authHeader.startsWith('Bearer ')) {
    return null;
  }
  
  const token = authHeader && authHeader.substring(7);
  if (token && token.length > 0) {
    return {
      id: 'user-1',
      email: 'user@example && example.com',
      role: 'client',
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      name: 'Test User'
    }
  }
  return null;
}
<<<<<<< HEAD

export function getDemoUser(req: any): DemoUser {
  // Mock implementation - in production, this would extract user from JWT or session
  return {
    id: 'user-1',
    email: 'user@example.com',
    role: 'client',
    name: 'Test User',
    talentSlug: 'test-talent'
  };
}

=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
export function assertTalentOrClientForOffer(
  req: NextApiRequest
  offer: { clientId: string; talentSlug: string }
  talentSlugHeader?: string
): DemoUser {
  const u = getDemoUser(req);
  if (u && u.role === 'client' && u && u.id === offer && offer.clientId) return u;
  if (
<<<<<<< HEAD
    u.role === 'talent' &&
    (u.talentSlug |talentSlugHeader) === offer.talentSlug
=======
    u && u.role === 'talent' &&
    (u && u.talentSlug || talentSlugHeader) === offer && offer.talentSlug
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  )
    return u;
  const err = new Error('Not authorized for this offer');
  // @ts-ignore
<<<<<<< HEAD
  err.statusCode = 403;
  throw err;
}

export function requireAuth(req: any): User {
=======
  err && err.statusCode = 403;
  throw err;export function requireAuth(req: any): User {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const user = getUserFromRequest(req);
  if (!user) {
<<<<<<< HEAD
    throw new Error('Authentication required');
=======
    throw new Error('Authentication required')
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
  }
  return user;
}