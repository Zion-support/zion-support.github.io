<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { NextApiRequest } from "next";
type DemoUser = { id: string, role: "client" | "talent", talentSlug?: string };
export function getDemoUser(req: NextApiRequest): DemoUser {;
  // Prefer headers for server-side calls, fallback to cookies-like header or defaults;
  const role = (req.headers["x-demo-user-role"] as string) || "client";
  const id = (req.headers["x-demo-user-id"] as string) || (role === "client" ? "client-1" : "talent-1");
  const talentSlug = (req.headers["x-demo-talent-slug"] as string) || undefined;
  return { id, role: role === "talent" ? "talent" : "client", talentSlug }
}
;
export function assertClient(req: NextApiRequest): DemoUser {;
  const u = getDemoUser(req);
  if (u.role !== "client") {;
    const err = new Error("Client role required");
    // @ts-ignore add code;
    err.statusCode = 403;
    throw err;
  }
  return u;
}
;
export function assertTalentOrClientForOffer(req: NextApiRequest, offer: { clientId: string, talentSlug: string }, talentSlugHeader?: string): DemoUser {;
  const u = getDemoUser(req);
  if (u.role === "client" && u.id === offer.clientId) return u;
  if (u.role === "talent" && (u.talentSlug || talentSlugHeader) === offer.talentSlug) return u;
  const err = new Error("Not authorized for this offer");
  // @ts-ignore;
  err.statusCode = 403;
  throw err;
}
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      name: 'Test User'
    }
  }
  return null;
}
export function assertTalentOrClientForOffer(
  req: NextApiRequest
  offer: { clientId: string; talentSlug: string }
  req: NextApiRequest,;
  offer: { clientId: string; talentSlug: string },

=======


origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      name: 'Test User'
      name: 'Test User''
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

  req: NextApiRequest;,
  offer: { clientId: string; talentSlug: string }

  req: NextApiRequest,;
  offer: { clientId: string; talentSlug: string },


<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  talentSlugHeader?: string
): DemoUser {
=======

  talentSlugHeader?: string;
): DemoUser {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const u = getDemoUser(req);
  if (u && u.role === 'client' && u && u.id === offer && offer.clientId) return u;
  if (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
<<<<<<< HEAD
=======
    u && u.role === 'talent' &&
    (u && u.talentSlug || talentSlugHeader) === offer && offer.talentSlug

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  )
    return u;'
  const err = new Error('Not authorized for this offer');
<<<<<<< HEAD
  // @ts-ignore


<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

    return u;'
  const err = new Error('Not authorized for this offer');'

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

    hourlyRate?: number;'
    availability?: 'available' | 'busy' | 'unavailable';'
  };
  business?: {
    name: string;,
  industry: string;'
    size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';'
    website?: string;

  };
  createdAt: string;,
  lastActiveAt: string;
}

export interface AuthContext {
  user: MarketplaceUser | null;
  isAuthenticated: boolean;
  permissions: string[];
  sessionId?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  err && err.statusCode = 403;
  throw err;export function requireAuth(req: any): User {

  const user = getUserFromRequest(req);
  if (!user) {

    throw new Error('Authentication required')

  }
  return user;
}

origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a




<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export function getUserFromRequest (req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {
  $2
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31



origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
  // @ts-ignore;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function getUserFromRequest (req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {
  $2

<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

origin/cursor/expand-services-advertise-and-build-project-c28b
  // TODO: Implement
}
  user: MarketplaceUser | null;,
  isAuthenticated: boolean;
  permissions: string[];}
  sessionId?: string;}
}




export function getUserFromRequest (req: any): User | null {
  // TODO: Implement
}
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {

  $2;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}
    return null;
  }
  const token = auth_header.substring (7);
  // Check condition;
if ( {) {}
  $2;
}
<<<<<<< HEAD
    return {'
      id: 'user - 1','
      email: 'user@example.com','
      role: 'client','
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      name: 'Test User';
  // Check condition;

if ( {) {
  $2;
}
    return {
  // TODO: Implement
}'
      id: 'user - 1',''
      email: 'user@example.com',''
      role: 'client',''
      name: 'Test User';'

    }
  }
  return null;
}
export function assertTalentOrClientForOffer (
  req: NextApiRequest,;
  offer: { client_id: string; talent_slug: string },
  talentSlugHeader?: string): DemoUser {}
  const u = getDemoUser (req);
  // Check condition;
if (return u) {}
  $2;
}
  // Check condition;
if (=== offer.talent_slug) {}
  $2;
}
  );
<<<<<<< HEAD
    return u;'
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const err = new Error ('Not authorized for this offer');
  // @ts - ignore;
  err.status_code = 403;
  throw err;export function require_auth (req: any): User {};
  const user = getUserFromRequest (req);
  // Check condition;
if ( {) {}
  $2;
}'
    throw new Error ('Authentication required'),
  }
  return user;
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  err.statusCode = 403;
  throw err;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
<<<<<<< HEAD
=======
import { NextApiRequest } from "next";
type DemoUser = { id: string, role: "client" | "talent", talentSlug?: string };
export function getDemoUser(req: NextApiRequest): DemoUser {;
  // Prefer headers for server-side calls, fallback to cookies-like header or defaults;
  const role = (req.headers["x-demo-user-role"] as string) || "client";
  const id = (req.headers["x-demo-user-id"] as string) || (role === "client" ? "client-1" : "talent-1");
  const talentSlug = (req.headers["x-demo-talent-slug"] as string) || undefined;
  return { id, role: role === "talent" ? "talent" : "client", talentSlug }
}
;
export function assertClient(req: NextApiRequest): DemoUser {;
  const u = getDemoUser(req);
  if (u.role !== "client") {;
    const err = new Error("Client role required");
    // @ts-ignore add code;
    err.statusCode = 403;
    throw err;
  }
  return u;
}
;
export function assertTalentOrClientForOffer(req: NextApiRequest, offer: { clientId: string, talentSlug: string }, talentSlugHeader?: string): DemoUser {;
  const u = getDemoUser(req);
  if (u.role === "client" && u.id === offer.clientId) return u;
  if (u.role === "talent" && (u.talentSlug || talentSlugHeader) === offer.talentSlug) return u;
  const err = new Error("Not authorized for this offer");
  // @ts-ignore;
  err.statusCode = 403;
  throw err;
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
  err.statusCode = 403;
  throw err;
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======



'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  // TODO: Implement
  offer: { client_id: string; talent_slug: string },)
  talentSlugHeader?: string): DemoUser {

  // TODO: Implement
}
  const u = getDemoUser (req);
  // Check condition;
if (return u) {
  $2;
}
  // Check condition;
if (=== offer.talent_slug) {
  $2;

}
  );
    return u;'
  const err = new Error ('Not authorized for this offer');'
  // @ts - ignore;
  err.status_code = 403;
  throw err;export function require_auth (req: any): User {

  // TODO: Implement

}
  const user = getUserFromRequest (req);
  // Check condition;
    throw new Error ('Authentication required'),
  return user;
pr-12325
}
'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
