// Admin authentication utilities (framework-agnostic minimal types)
export type ApiRequest = {
  headers: Record<string string | string[] | undefined>;
  [key: string]: any;
};

export interface Session {
  userId: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'super_admin' | 'admin' | 'moderator';
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
    lastLogin: new Date()},
  {
    id: 'admin_2',
    email: 'moderator@ziontechgroup.com',
    role: 'moderator',
    permissions: ['content_moderation', 'user_management'],
    lastLogin: new Date()}];

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

export async function authenticateAdmin(email: string, password: string): Promise<AdminUser | null> {
  // Mock authentication - in production, this would verify credentials against a database
  const user = adminUsers.find(u => u.email === email);
  if (user && password === 'admin123') {
    user.lastLogin = new Date();
    return user;
  }
  return null;
}

export function getAdminUser(id: string): AdminUser | null {
  return adminUsers.find(u => u.id === id) || null;
}

export function getSessionFromReq(req: ApiRequest): Session | null {
  const authHeader = req.headers.authorization;
  if (!authHeader || (Array.isArray(authHeader) ? authHeader[0] : authHeader).length === 0) {
    return null;
  }
  const value = Array.isArray(authHeader) ? authHeader[0] : authHeader;
  if (value.includes('admin')) {
    return { userId: 'admin-1', email: 'admin@zion.os', role: 'admin' };
  }
  return { userId: 'user-1', email: 'user@zion.os', role: 'user' };
}

export function isInternalAgentRequest(req: ApiRequest): boolean {
  const userAgent = req.headers['user-agent'] || '';
  const userAgentString = Array.isArray(userAgent) ? userAgent[0] : userAgent;
  const internalAgents = ['zion-bot', 'internal-agent', 'automation'];
  return internalAgents.some(agent => userAgentString.toLowerCase().includes(agent));
}

export const isAdmin = (): boolean => {
  return true;
};