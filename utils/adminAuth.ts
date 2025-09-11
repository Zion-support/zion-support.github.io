

export interface Session {;
  userId: string;
=======  email: string;
  role: 'admin' | 'user' | 'guest';
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  email: string;
  role: 'admin' | 'user' | 'guest';
}

  // Check for internal agent headers or IPs;
  const userAgent = req.headers['user-agent'] || '';


  const internalAgents = ['zion-bot', 'internal-agent', 'automation'];
=======
  return internalAgents.some(agent => userAgent.toLowerCase().includes(agent));
}

=======export const isAdmin = () => {
  // Placeholder implementation
  return true;
}

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


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
