

  email: string;
  role: 'admin' | 'user' | 'guest';
}


  // Check for internal agent headers or IPs;
  const userAgent = req.headers['user-agent'] || '';


  const internalAgents = ['zion-bot', 'internal-agent', 'automation'];
  return internalAgents.some(agent => userAgent.toLowerCase().includes(agent));
}

=======
export const isAdmin = () => {
  // Placeholder implementation
  return true;
}

=======
// Admin authentication utilities
import { NextApiRequest, NextApiResponse } from 'next';

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'super_admin' | 'moderator';
  permissions: string[];
  lastLogin: Date;
}

export interface AdminSession {
  user: AdminUser;
  token: string;
  expiresAt: number;
}

// Mock admin users - in production, this would come from a database
const adminUsers: AdminUser[] = [
  {
    id: 'admin_1',
    email: 'admin@ziontechgroup.com',
    role: 'super_admin',
    permissions: ['*'],
    lastLogin: new Date()
  },
  {
    id: 'admin_2',
    email: 'moderator@ziontechgroup.com',
    role: 'moderator',
    permissions: ['content_moderation', 'user_management'],
    lastLogin: new Date()
  }
];

export function createAdminSession(user: AdminUser, token: string): AdminSession {
  return {
    user,
    token,
    expiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };
}

export function isAdminAuthenticated(session: AdminSession | null): boolean {
  if (!session) return false;
  return Date.now() < session.expiresAt;
}

export function hasAdminPermission(session: AdminSession | null, permission: string): boolean {
  if (!session || !isAdminAuthenticated(session)) return false;
  return session.user.permissions.includes('*') || session.user.permissions.includes(permission);
}

export function isSuperAdmin(session: AdminSession | null): boolean {
  if (!session || !isAdminAuthenticated(session)) return false;
  return session.user.role === 'super_admin';
}

export function isModerator(session: AdminSession | null): boolean {
  if (!session || !isAdminAuthenticated(session)) return false;
  return ['admin', 'super_admin', 'moderator'].includes(session.user.role);
}

export function requireAdminAuth(handler: (req: NextApiRequest, res: NextApiResponse, session: AdminSession) => void) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const session = req.session as AdminSession;
    
    if (!isAdminAuthenticated(session)) {
      return res.status(401).json({ error: 'Admin authentication required' });
    }

    return handler(req, res, session);
  };
}

export function requireSuperAdmin(handler: (req: NextApiRequest, res: NextApiResponse, session: AdminSession) => void) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    const session = req.session as AdminSession;
    
    if (!isSuperAdmin(session)) {
      return res.status(403).json({ error: 'Super admin access required' });
    }

    return handler(req, res, session);
  };
}

export function requirePermission(permission: string) {
  return (handler: (req: NextApiRequest, res: NextApiResponse, session: AdminSession) => void) => {
    return (req: NextApiRequest, res: NextApiResponse) => {
      const session = req.session as AdminSession;
      
      if (!hasAdminPermission(session, permission)) {
        return res.status(403).json({ error: `Permission '${permission}' required` });
      }

      return handler(req, res, session);
    };
  };
}

export async function authenticateAdmin(email: string, password: string): Promise<AdminUser | null> {
  // Mock authentication - in production, this would verify credentials against a database
  const user = adminUsers.find(u => u.email === email);
  if (user && password === 'admin123') { // Mock password
    user.lastLogin = new Date();
    return user;
  }
  return null;
}

export function getAdminUser(id: string): AdminUser | null {
  return adminUsers.find(u => u.id === id) || null;
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
export function getSessionFromReq (req: NextApiRequest): Session | null {
  // Mock implementation - replace with actual session logic;
  const auth_header = req.headers.authorization;
  // Check condition
if ( {) {
  $2
}
    return null;
  }
  // Simple mock for admin users;
  if () {) {
  $2
}
    return { user_id: 'admin - 1', email: 'admin@zion.os', role: 'admin' }
  }
  return { user_id: 'user - 1', email: 'user@zion.os', role: 'user' }
}
export function isInternalAgentRequest (req: NextApiRequest): boolean {
  // Check for internal agent headers or IPs;
  const user_agent = req.headers['user - agent'] || '';
  const internal_agents = ['zion - bot', 'internal - agent', 'automation'];
;
  return internal_agents.some (agent => user_agent.toLowerCase ().includes (agent));
}
export const is_admin = () =>: any {
  // Placeholder implementation;
  return true;




=======
};


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
