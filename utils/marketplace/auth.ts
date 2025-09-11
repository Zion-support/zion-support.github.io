

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

export interface AuthContext {
  user: MarketplaceUser | null;
  isAuthenticated: boolean;
  permissions: string[];
  sessionId?: string;
}

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

  async getUserByEmail(email: string): Promise<MarketplaceUser | null> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }
    return null;
  }

  async getUserBySlug(slug: string): Promise<MarketplaceUser | null> {
    for (const user of this.users.values()) {
      if (user.slug === slug) {
        return user;
      }
    }
    return null;
  }

  async updateUser(id: string, updates: Partial<MarketplaceUser>): Promise<MarketplaceUser | null> {
    const user = this.users.get(id);
    if (!user) return null;

    const updatedUser = {
      ...user,
      ...updates,
      lastActiveAt: new Date().toISOString()
    };

    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.users.delete(id);
  }

  // Authentication
  async authenticateUser(email: string, password: string): Promise<MarketplaceUser | null> {
    const user = await this.getUserByEmail(email);
    if (!user) return null;

    // In a real app, you would verify the password hash here
    // For now, we'll just check if the user exists
    return user;
  }

  async createSession(userId: string, expiresInHours: number = 24): Promise<string> {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const expiresAt = Date.now() + (expiresInHours * 60 * 60 * 1000);

    this.sessions.set(sessionId, { userId, expiresAt });
    return sessionId;
  }

  async validateSession(sessionId: string): Promise<MarketplaceUser | null> {
    const session = this.sessions.get(sessionId);
    if (!session || Date.now() > session.expiresAt) {
      this.sessions.delete(sessionId);
      return null;
    }

    return this.getUser(session.userId);
  }

  async destroySession(sessionId: string): Promise<boolean> {
    return this.sessions.delete(sessionId);
  }

  // Authorization
  async hasPermission(userId: string, permission: string): Promise<boolean> {
    const user = await this.getUser(userId);
    if (!user) return false;

    const permissions = this.getUserPermissions(user);
    return permissions.includes(permission);
  }

  private getUserPermissions(user: MarketplaceUser): string[] {
    const basePermissions = ['read:profile', 'update:own_profile'];
    
    switch (user.role) {
      case 'client':
        return [
          ...basePermissions,
          'create:project',
          'read:own_projects',
          'update:own_projects',
          'create:offer',
          'read:offers',
          'update:own_offers',
          'read:talent_profiles',
          'create:message',
          'read:messages'
        ];
      case 'talent':
        return [
          ...basePermissions,
          'read:projects',
          'apply:projects',
          'read:own_applications',
          'update:own_applications',
          'read:offers',
          'update:own_offers',
          'create:message',
          'read:messages',
          'update:availability'
        ];
      case 'admin':
        return [
          ...basePermissions,
          'admin:all',
          'read:all_projects',
          'update:all_projects',
          'delete:all_projects',
          'read:all_offers',
          'update:all_offers',
          'delete:all_offers',
          'read:all_users',
          'update:all_users',
          'delete:all_users',
          'moderate:content'
        ];
      default:
        return basePermissions;
    }
  }

  // Utility methods
  async getAuthContext(sessionId?: string): Promise<AuthContext> {
    if (!sessionId) {
      return {
        user: null,
        isAuthenticated: false,
        permissions: []
      };
    }

    const user = await this.validateSession(sessionId);
    if (!user) {
      return {
        user: null,
        isAuthenticated: false,
        permissions: []
      };
    }

    return {
      user,
      isAuthenticated: true,
      permissions: this.getUserPermissions(user),
      sessionId
    };
  }

  async requireAuth(sessionId?: string): Promise<MarketplaceUser> {
    const context = await this.getAuthContext(sessionId);
    if (!context.isAuthenticated || !context.user) {
      throw new Error('Authentication required');
    }
    return context.user;
  }

  async requireRole(sessionId: string, requiredRole: MarketplaceUser['role']): Promise<MarketplaceUser> {
    const user = await this.requireAuth(sessionId);
    if (user.role !== requiredRole) {
      throw new Error(`Role '${requiredRole}' required`);
    }
    return user;
  }

  async requirePermission(sessionId: string, permission: string): Promise<MarketplaceUser> {
    const user = await this.requireAuth(sessionId);
    const hasPermission = await this.hasPermission(user.id, permission);
    if (!hasPermission) {
      throw new Error(`Permission '${permission}' required`);
    }
    return user;
  }

  // Cleanup
  async cleanupExpiredSessions(): Promise<number> {
    let removedCount = 0;
    const now = Date.now();

    for (const [sessionId, session] of this.sessions) {
      if (now > session.expiresAt) {
        this.sessions.delete(sessionId);
        removedCount++;
      }
    }

    return removedCount;
  }

  async clearAll(): Promise<void> {
    this.users.clear();
    this.sessions.clear();
  }
}

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
