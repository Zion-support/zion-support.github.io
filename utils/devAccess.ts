<<<<<<< HEAD
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import type { NextApiRequest, NextApiResponse } from 'next';
export type DevRole = 'admin' | 'maintainer' | 'contributor';
=======
<<<<<<< HEAD
export interface DevIdentity {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  isAuthenticated: boolean;
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  roles: DevRole[];
  userId?: string;
}
<<<<<<< HEAD
=======

    const gitDir = path && path.join(process && process.cwd(), '.git');
    if (!fs && fs.existsSync(gitDir)) return { connected: false };

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    const branch = execSync('git rev-parse --abbrev-ref HEAD', {
      stdio: ['ignore', 'pipe', 'ignore']
    })
      .toString()
      .trim();
    return { connected: true, branch }
  } catch {
    return { connected: false }
  }
}
<<<<<<< HEAD
export function getDevIdentity(req: NextApiRequest): DevIdentity {

export function getDevIdentity(req: NextApiRequest): DevIdentity {;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======



export function getDevIdentity(req: NextApiRequest): DevIdentity {;


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // TODO: integrate real auth; for now, check a header and env var for dev

  const token = req && req.headers['x-dev-token'] || req && req.headers['x-admin-token'];
  const adminToken = process && process.env.ADMIN_TOKEN;

  if (token && adminToken && token === adminToken) {
<<<<<<< HEAD

  }
  return { isAuthenticated: false, roles: [] }
}
=======
<<<<<<< HEAD
  }
  return { isAuthenticated: false, roles: [] }
}
  if (token && adminToken && token === adminToken) {

=======
<<<<<<< HEAD
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' }
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
  return { isAuthenticated: false, roles: [] }
}
<<<<<<< HEAD

=======
=======
  if (token && adminToken && token === adminToken) {

    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  return { isAuthenticated: false, roles: [] }
}

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
export function requireRoles(
  req: NextApiRequest
  res: NextApiResponse
  allowed: DevRole[]
): DevIdentity | undefined {;
  const identity = getDevIdentity(req);
  if (!identity.isAuthenticated) {
    res.status(401).json({ error: 'Unauthorized' });
    return undefined;
  }
  const hasRole = identity.roles.some(r => allowed.includes(r));
  if (!hasRole) {
    res && res.status(403).json({ error: 'Forbidden' });
    return undefined;
  }
  return identity;
<<<<<<< HEAD
=======

}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
// Development access utilities
export interface DevAccessConfig {
  enabled: boolean;
  allowedIps: string[];
  allowedUsers: string[];
  requireAuth: boolean;
  maxRequestsPerMinute: number;
}

export interface DevUser {
  id: string;
  name: string;
  email: string;
  role: 'developer' | 'admin' | 'tester';
  permissions: string[];
  lastAccess: Date;
}

class DevAccessManager {
  private config: DevAccessConfig;
  private users: Map<string, DevUser> = new Map();
  private accessLog: Array<{ ip: string; user: string; timestamp: number; action: string }> = [];

  constructor(config: DevAccessConfig) {
    this.config = config;
  }

  isDevAccessEnabled(): boolean {
    return this.config.enabled;
  }

  isIpAllowed(ip: string): boolean {
    if (!this.config.enabled) return false;
    return this.config.allowedIps.includes(ip) || this.config.allowedIps.includes('*');
  }

  isUserAllowed(userId: string): boolean {
    if (!this.config.enabled) return false;
    return this.config.allowedUsers.includes(userId) || this.config.allowedUsers.includes('*');
  }

  hasPermission(userId: string, permission: string): boolean {
    const user = this.users.get(userId);
    if (!user) return false;
    return user.permissions.includes('*') || user.permissions.includes(permission);
  }

  logAccess(ip: string, user: string, action: string): void {
    this.accessLog.push({
      ip,
      user,
      timestamp: Date.now(),
      action
    });

    // Keep only last 1000 entries
    if (this.accessLog.length > 1000) {
      this.accessLog = this.accessLog.slice(-1000);
    }
  }

  getAccessLog(): Array<{ ip: string; user: string; timestamp: number; action: string }> {
    return [...this.accessLog];
  }

  addUser(user: DevUser): void {
    this.users.set(user.id, user);
  }

  removeUser(userId: string): boolean {
    return this.users.delete(userId);
  }

  getUser(userId: string): DevUser | undefined {
    return this.users.get(userId);
  }

  getAllUsers(): DevUser[] {
    return Array.from(this.users.values());
  }

  updateConfig(newConfig: Partial<DevAccessConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  getConfig(): DevAccessConfig {
    return { ...this.config };
  }
}

// Default configuration
const defaultConfig: DevAccessConfig = {
  enabled: process.env.NODE_ENV === 'development',
  allowedIps: ['127.0.0.1', '::1', 'localhost'],
  allowedUsers: ['*'],
  requireAuth: false,
  maxRequestsPerMinute: 100
};

// Singleton instance
export const devAccessManager = new DevAccessManager(defaultConfig);

// Middleware for development access
export function requireDevAccess(req: any, res: any, next: any) {
  if (!devAccessManager.isDevAccessEnabled()) {
    return res.status(404).json({ error: 'Not found' });
  }

  const ip = req.ip || req.connection.remoteAddress || 'unknown';
  if (!devAccessManager.isIpAllowed(ip)) {
    return res.status(403).json({ error: 'Access denied' });
  }

  devAccessManager.logAccess(ip, req.user?.id || 'anonymous', req.path);
  next();
}

// Utility functions
export function isDevelopmentMode(): boolean {
  return process.env.NODE_ENV === 'development';
}

export function isProductionMode(): boolean {
  return process.env.NODE_ENV === 'production';
}

export function getClientIp(req: any): string {
  return req.ip || 
         req.connection.remoteAddress || 
         req.socket.remoteAddress ||
         (req.connection.socket ? req.connection.socket.remoteAddress : null) ||
         'unknown';
}

=======
export function getDevIdentity (req: NextApiRequest): DevIdentity {
  // TODO: integrate real auth; for now, check a header and env var for dev;
  const token = req.headers['x - dev - token'] || req.headers['x - admin - token'];
  const admin_token = process.env.ADMIN_TOKEN;
  // Check condition
if ( {) {
  $2
}
    return { is_authenticated: true, roles: ['admin'], user_id: 'admin' }
  }
  return { is_authenticated: false, roles: [] }
}
export function require_roles (
  req: NextApiRequest,
  res: NextApiResponse,
  allowed: DevRole[]): DevIdentity | undefined {
  const identity = getDevIdentity (req);
  // Check condition
if ( {) {
  $2
}
    res.status (401).json ({ error: 'Unauthorized' });
    return undefined;
  }
  const has_role = identity.roles.some (r => allowed.includes (r));
  // Check condition
if ( {) {
  $2
}
    res.status (403).json ({ error: 'Forbidden' });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return undefined;
  }
  return identity;
}
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
