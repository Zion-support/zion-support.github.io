      "name": 'Test User''
    }
  }
  return null;
import { NextApiRequest } from "next";
type DemoUser = { id: string, role: "client" | "talent", talentSlug?: string },

export function getDemoUser(req: NextApiRequest): DemoUser {
  // Prefer headers for server-side calls, fallback to cookies-like header or defaults
  const role = $2;
  const id = $2;
  const talentSlug = $2;
  return { id, role: role === "talent" ? "talent" : "client", talentSlug }
}

export function assertClient(req: NextApiRequest): DemoUser {
  const u = getDemoUser($2);
  if (u.role !== "client") {
    const err = new Error($2);
    // @ts-ignore add code
    err.statusCode = $2;
    throw err
  }
  return u
}
export function assertTalentOrClientForOffer(
  "req": NextApiRequest,
"offer": { "clientId": string; "talentSlug": string }
  "req": NextApiRequest,;
  "offer": { "clientId": string; "talentSlug": string },



origin/cursor/expand-services-advertise-and-build-project-c28b
  talentSlugHeader?: string
): DemoUser {
  }
  const u = getDemoUser(req);
  if (u && u.role === 'client' && u && u.id === offer && offer.clientId) return u;'
  if (


origin/cursor/expand-services-advertise-and-build-project-c28b

  )
    return u;
  const err = new Error('Not authorized for this offer');'
  // @ts-ignore





// Marketplace authentication utilities,
export interface MarketplaceUser {
  }
  "id": string;
  "role": 'client' | 'talent' | 'admin';'
  "email": string;
  "name": string;
  "slug": string;
  "isVerified": boolean;
  profile?: {
    }
    bio?: string;
    skills?: string[];
    experience?: string;
    portfolio?: string[];
    hourlyRate?: number;
    availability?: 'available' | 'busy' | 'unavailable';'
  };
  business?: {
    }
    "name": string;
    "industry": string;
    "size": 'startup' | 'small' | 'medium' | 'large' | 'enterprise';'
    website?: string;
  };
  "createdAt": string;
  "lastActiveAt": string;
}

export interface AuthContext {
  }
  "user": MarketplaceUser | null;
  "isAuthenticated": boolean;
  "permissions": string[];
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








export function getUserFromRequest ("req": any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  }
  const auth_header = req.headers.authorization;
  if () {) {
  $2



origin/cursor/expand-services-advertise-and-build-project-c28b


}
    return null;
  }
  const token = auth_header.substring (7);
  // Check condition,
if ( {) {
  $2
}
    return {
      }
      "id": 'user - 1','
      "email": 'user@example.com','
      "role": 'client','
      "name": 'Test User';'
    }
  }
  return null;
}
export function assertTalentOrClientForOffer (
  "req": NextApiRequest,
  "offer": { "client_id": string; "talent_slug": string },
  talentSlugHeader?: string): DemoUser {
  }
  const u = getDemoUser (req);
  // Check condition,
if (return u) {
  $2
}
  // Check condition,
if (=== offer.talent_slug) {
  $2
}
  );
    return u;
  const err = new Error ('Not authorized for this offer');'
  // @ts - ignore;
  err.status_code = 403;
  throw err;export function require_auth ("req": any): User {
  }
  const user = getUserFromRequest (req);
  // Check condition,
if ( {) {
  $2
}
    throw new Error ('Authentication required'),'
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
  err.statusCode = 403;
  throw err;
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

  err.statusCode = 403;
  throw err;
origin/cursor/automate-test-improve-and-merge-code-2533
    throw new Error ('Authentication required')}
  return user;
}err.statusCode = 403;
  throw err;



  err.statusCode = 403;
  throw err;

export function assertTalentOrClientForOffer(req: NextApiRequest, offer: { clientId: string, talentSlug: string}, talentSlugHeader?: string): DemoUser {
  if (u.role = $2;
  if (u.role = $2;
  // @ts-ignore
  err.statusCode = $2;
  throw err
}
