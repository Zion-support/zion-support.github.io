<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  talentSlugHeader?: string
): DemoUser {
  const u = getDemoUser(req);
  if (u && u.role === 'client' && u && u.id === offer && offer.clientId) return u;
  if (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

    u && u.role === 'talent' &&
    (u && u.talentSlug || talentSlugHeader) === offer && offer.talentSlug

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  )
    return u;
  const err = new Error('Not authorized for this offer');
  // @ts-ignore


<<<<<<< HEAD



<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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

export interface AuthContext {
  user: MarketplaceUser | null;
  isAuthenticated: boolean;
  permissions: string[];
  sessionId?: string;
}
<<<<<<< HEAD
=======
  err && err.statusCode = 403;
  throw err;export function requireAuth(req: any): User {

  const user = getUserFromRequest(req);
  if (!user) {

    throw new Error('Authentication required')

  }
  return user;
}

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc




<<<<<<< HEAD
export function getUserFromRequest (req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {
  $2

=======



origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
export function assertTalentOrClientForOffer(req: NextApiRequest;
  offer: { clientId: string; talentSlug: string }
  req: NextApiRequest,offer: { clientId: string; talentSlug: string },talentSlugHeader?: string;
): DemoUser {const u = getDemoUser(req)if (u && u.role === 'client' && u && u.id === offer && offer.clientId) return u;
  if (u && u.role === 'talent' &&;
    (u && u.talentSlug || talentSlugHeader) === offer && offer.talentSlug;
  )return u;
  const err = new Error('Not authorized for this offer')// @ts-ignore;
// Marketplace authentication utilities;
export interface MarketplaceUser  {id: string;
  role: 'client' | 'talent' | 'admin';
  email: string;
  name: string;
  slug: string;
  isVerified: boolean;
  profile?: {bio?: string;
    skills?: string[];
    experience?: string;
    portfolio?: string[];
    hourlyRate?: number;
    availability?: 'available' | 'busy' | 'unavailable';
  }business?: {name: string;
    industry: string;
    size: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
    website?: string;
  }createdAt: string;
  lastActiveAt: string;
}export interface AuthContext  {user: MarketplaceUser | null;
  isAuthenticated: boolean;
  permissions: string[];
  sessionId?: string;
}
  err && err.statusCode = 403;
  throw err;export function requireAuth(req: any): User {const user = getUserFromRequest(req)if (!user) {throw new Error('Authentication required')}
  return user;
}export function getUserFromRequest (req: any): User | null {// Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {$2;
}
    return null;
  }
  const token = auth_header.substring (7)// Check condition;
if ( {) {$2;
}
    return {id: 'user - 1',email: 'user@example.com',role: 'client',name: 'Test User';
    }
  }
  return null;
}
export function assertTalentOrClientForOffer (req: NextApiRequest,offer: { client_id: string; talent_slug: string },talentSlugHeader?: string): DemoUser {const u = getDemoUser (req)// Check condition;
if (return u) {$2;
}
  // Check condition;
if (=== offer.talent_slug) {$2;
}
  )return u;
  const err = new Error ('Not authorized for this offer')// @ts - ignore;
  err.status_code = 403;
  throw err;export function require_auth (req: any): User {const user = getUserFromRequest (req)// Check condition;
if ( {) {$2;
}
    throw new Error ('Authentication required')}
  return user;
}throw new Error ('Authentication required')}
  return user;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  err.statusCode = 403;
  throw err;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

  err.statusCode = 403;
  throw err;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
    throw new Error ('Authentication required')}
  return user;
}err.statusCode = 403;
  throw err;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
