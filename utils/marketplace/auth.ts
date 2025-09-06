<<<<<<< HEAD
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
=======
<<<<<<< HEAD
import { NextApiRequest } from 'next';
export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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

export function assertTalentOrClientForOffer(
  req: NextApiRequest
  offer: { clientId: string; talentSlug: string }
=======
export function assertTalentOrClientForOffer(
<<<<<<< HEAD
  req: NextApiRequest
  offer: { clientId: string; talentSlug: string }
=======
  req: NextApiRequest,;
  offer: { clientId: string; talentSlug: string },
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  talentSlugHeader?: string
): DemoUser {
  const u = getDemoUser(req);
  if (u && u.role === 'client' && u && u.id === offer && offer.clientId) return u;
  if (
    u.role === 'talent' &&
    (u.talentSlug |talentSlugHeader) === offer.talentSlug
  )
    return u;
  const err = new Error('Not authorized for this offer');
  // @ts-ignore
  err.statusCode = 403;
  throw err;
}

export function requireAuth(req: any): User {
  const user = getUserFromRequest(req);
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
}
<<<<<<< HEAD
export function getUserFromRequest (req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {
  $2
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
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======



=======
// Marketplace authentication utilities
export interface MarketplaceUser {
  id: string;
  role: 'client' | 'talent' | 'admin';
  email: string;
  name: string;
  slug: string;
  isVerified: boolean;
  profile?: {
    bio?: string;
    skills?: string[];
    experience?: string;
    portfolio?: string[];
    hourlyRate?: number;
    availability?: 'available' | 'busy' | 'unavailable';
  };
  business?: {
    name: string;
    industry: string;
    size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
    website?: string;
  };
  createdAt: string;
  lastActiveAt: string;
}

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
