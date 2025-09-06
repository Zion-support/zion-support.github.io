<<<<<<< HEAD

import { NextApiRequest } from 'next';
export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
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
export function assertTalentOrClientForOffer(

=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  talentSlugHeader?: string
): DemoUser {
  const u = getDemoUser(req);
  if (u.role === 'client' && u.id === offer.clientId) return u;
  if (

    u && u.role === 'talent' &&
    (u && u.talentSlug || talentSlugHeader) === offer && offer.talentSlug

  )
    return u;
  const err = new Error('Not authorized for this offer');
  // @ts-ignore

  err && err.statusCode = 403;
  throw err;export function requireAuth(req: any): User {

  const user = getUserFromRequest(req);
  if (!user) {

    throw new Error('Authentication required')

  }
  return user;
}
<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4




<<<<<<< HEAD
=======
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
    return null;
  }
  const token = auth_header.substring (7);
  // Check condition
if ( {) {
  $2
}
    return {
      id: 'user - 1',
      email: 'user@example.com',
      role: 'client',
      name: 'Test User';
    }
  }
  return null;
}
export function assertTalentOrClientForOffer (
  req: NextApiRequest,
  offer: { client_id: string; talent_slug: string },
  talentSlugHeader?: string): DemoUser {
  const u = getDemoUser (req);
  // Check condition
if (return u) {
  $2
}
  // Check condition
if (=== offer.talent_slug) {
  $2
}
  );
    return u;
  const err = new Error ('Not authorized for this offer');
  // @ts - ignore;
  err.status_code = 403;
  throw err;export function require_auth (req: any): User {
  const user = getUserFromRequest (req);
  // Check condition
if ( {) {
  $2
}
    throw new Error ('Authentication required'),
  }
  return user;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5


=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
