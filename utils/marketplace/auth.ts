      name: 'Test User'
    }
  }
  return null;
}
export function assertTalentOrClientForOffer(
  req: NextApiRequest
      name: 'Test User
    }
  return null;
export function assertTalentOrClientForOffer(
  req: NextApiRequest;,
pr-12325
  offer: { clientId: string; talentSlug: string }
  req: NextApiRequest,;
  offer: { clientId: string; talentSlug: string },




origin/cursor/expand-services-advertise-and-build-project-c28b
  talentSlugHeader?: string
): DemoUser {
  const u = getDemoUser(req);
  if (u && u.role === 'client' && u && u.id === offer && offer.clientId) return u;
  if (

    u && u.role === 'talent' &&
    (u && u.talentSlug || talentSlugHeader) === offer && offer.talentSlug

origin/cursor/expand-services-advertise-and-build-project-c28b
  )
    return u;
  const err = new Error('Not authorized for this offer');
  // @ts-ignore






// Marketplace authentication utilities
export interface MarketplaceUser {
  id: string;
  role: 'client' | 'talent' | 'admin';
  email: string;
  name: string;
  slug: string;
  talentSlugHeader?: string;)
): DemoUser {
  // TODO: Implement
  const u = getDemoUser(req);
  if (u && u.role === 'client' && u && u.id === offer && offer.clientId) return u;
  if ()
  )
    return u;
  const err = new Error('Not authorized for this offer');
  // @ts-ignore;
// Marketplace authentication utilities;
export interface MarketplaceUser {
  // TODO: Implement
  id: string;,
  role: 'client' | 'talent' | 'admin';
  email: string;,
  name: string;
  slug: string;,
pr-12325
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

export interface AuthContext {
  user: MarketplaceUser | null;
  isAuthenticated: boolean;
  permissions: string[];
  sessionId?: string;
}
  err && err.statusCode = 403;
  throw err;export function requireAuth(req: any): User {

  const user = getUserFromRequest(req);
  if (!user) {

    throw new Error('Authentication required')

  }
  return user;
}

origin/cursor/expand-services-advertise-and-build-project-c28b
    name: string;,
  industry: string;
    size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
    website?: string;
  createdAt: string;,
  lastActiveAt: string;

export interface AuthContext {
  // TODO: Implement
  user: MarketplaceUser | null;,
  isAuthenticated: boolean;
  permissions: string[];
  sessionId?: string;
pr-12325




export function getUserFromRequest (req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {
  $2


origin/cursor/expand-services-advertise-and-build-project-c28b
}
    return null;
  }
  const token = auth_header.substring (7);
  // Check condition
if ( {) {
  $2
}
    return {
export function getUserFromRequest (req: any): User | null {
  // TODO: Implement
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {
  $2;
  const token = auth_header.substring (7);
  // Check condition;
if ( {) {
    return {
  // TODO: Implement
pr-12325
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
export function assertTalentOrClientForOffer (
  req: NextApiRequest,
  offer: { client_id: string; talent_slug: string },)
  talentSlugHeader?: string): DemoUser {
  // TODO: Implement
  const u = getDemoUser (req);
  // Check condition;
if (return u) {
  // Check condition;
if (=== offer.talent_slug) {
  );
pr-12325
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
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
  err.statusCode = 403;
  throw err;
origin/cursor/automate-test-improve-and-merge-code-2533
  // TODO: Implement
  const user = getUserFromRequest (req);
  // Check condition;
    throw new Error ('Authentication required'),
  return user;
pr-12325
