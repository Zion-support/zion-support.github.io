<<<<<<< HEAD

<<<<<<< HEAD

=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  talentSlugHeader?: string
): DemoUser {
  const u = getDemoUser(req);
  if (u && u.role === 'client' && u && u.id === offer && offer.clientId) return u;
  if (
<<<<<<< HEAD
<<<<<<< HEAD

    u && u.role === 'talent' &&
    (u && u.talentSlug || talentSlugHeader) === offer && offer.talentSlug

=======
    u.role === 'talent' &&
    (u.talentSlug |talentSlugHeader) === offer.talentSlug
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  )
    return u;
  const err = new Error('Not authorized for this offer');
  // @ts-ignore
<<<<<<< HEAD
<<<<<<< HEAD
=======
  err.statusCode = 403;
  throw err;export function requireAuth(req: any): User {;
  const user = getUserFromRequest(req);
  if (!user) {
    throw new Error('Authentication required')
  }
  return user;
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df





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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

export interface AuthContext {
  user: MarketplaceUser | null;
  isAuthenticated: boolean;
  permissions: string[];
  sessionId?: string;
}

<<<<<<< HEAD
class MarketplaceAuth {
  private users: Map<string, MarketplaceUser> = new Map();
  private sessions: Map<string, { userId: string; expiresAt: number }> = new Map();

  // User management
  async createUser(userData: Omit<MarketplaceUser, 'id' | 'createdAt' | 'lastActiveAt'>): Promise<MarketplaceUser> {
    const user: MarketplaceUser = {
      ...userData,
      id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString()
    };

    this.users.set(user.id, user);
    return user;
  }

  async getUser(id: string): Promise<MarketplaceUser | null> {
    return this.users.get(id) || null;
  }

<<<<<<< HEAD



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
=======
  async getUserByEmail(email: string): Promise<MarketplaceUser | null> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======



export function getUserFromRequest (req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {
  $2
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

// Singleton instance
export const marketplaceAuth = new MarketplaceAuth();

// Main functions for external use
export async function authenticateUser(email: string, password: string): Promise<MarketplaceUser | null> {
  return marketplaceAuth.authenticateUser(email, password);
}

export async function createSession(userId: string, expiresInHours?: number): Promise<string> {
  return marketplaceAuth.createSession(userId, expiresInHours);
}

export async function validateSession(sessionId: string): Promise<MarketplaceUser | null> {
  return marketplaceAuth.validateSession(sessionId);
}

export async function getAuthContext(sessionId?: string): Promise<AuthContext> {
  return marketplaceAuth.getAuthContext(sessionId);
}

export async function requireAuth(sessionId?: string): Promise<MarketplaceUser> {
  return marketplaceAuth.requireAuth(sessionId);
}

export async function requireRole(sessionId: string, requiredRole: MarketplaceUser['role']): Promise<MarketplaceUser> {
  return marketplaceAuth.requireRole(sessionId, requiredRole);
}

export async function requirePermission(sessionId: string, permission: string): Promise<MarketplaceUser> {
  return marketplaceAuth.requirePermission(sessionId, permission);
}

// Utility functions
export function createMarketplaceUser(
  role: MarketplaceUser['role'],
  email: string,
  name: string,
  slug: string,
  additionalData?: Partial<MarketplaceUser>
): Omit<MarketplaceUser, 'id' | 'createdAt' | 'lastActiveAt'> {
  return {
    role,
    email,
    name,
    slug,
    isVerified: false,
    ...additionalData
  };
}

export function generateUserSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function isUserVerified(user: MarketplaceUser): boolean {
  return user.isVerified;
}

export function canUserAccessProject(user: MarketplaceUser, project: any): boolean {
  if (user.role === 'admin') return true;
  if (user.role === 'client' && project.clientId === user.id) return true;
  if (user.role === 'talent' && project.talentSlug === user.slug) return true;
  return false;
}

}



}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
