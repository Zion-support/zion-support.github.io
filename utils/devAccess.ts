<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// Note: This is a Vite project, not Next.js
// Using generic request/response types instead of Next.js types
type ApiRequest = {
  headers: Record<string, string | string[] | undefined>;
  [key: string]: any;
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (data: any) => void;
  [key: string]: any;
};

export type DevRole = 'admin' | 'maintainer' | 'contributor';

export interface DevIdentity {
  isAuthenticated: boolean;
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import type { NextApiRequest, NextApiResponse } from 'next';
export type DevRole = 'admin' | 'maintainer' | 'contributor';
export interface DevIdentity {

export interface DevIdentity {;
  isAuthenticated: boolean;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  roles: DevRole[];
  userId?: string;
}
<<<<<<< HEAD

<<<<<<< HEAD
export function getGitStatus(): { connected: boolean; branch?: string } {
  try {
    const gitDir = path.join(process.cwd(), '.git');
    if (!fs.existsSync(gitDir)) return { connected: false };
=======
    const gitDir = path && path.join(process && process.cwd(), '.git');
    if (!fs && fs.existsSync(gitDir)) return { connected: false };

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
export function getGitStatus(): { connected: boolean; branch?: string } {
  try {
    const gitDir = path.join(process.cwd(), '.git');
    if (!fs.existsSync(gitDir)) return { connected: false }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    const branch = execSync('git rev-parse --abbrev-ref HEAD', {
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    return { connected: true, branch };
=======
=======
export function getGitStatus (): { connected: boolean; branch?: string } {
  try {
    const git_dir = path.join (process.cwd (), '.git');
    if () return { connected: false }) {
  $2
}
    const branch = exec_sync ('git rev - parse --abbrev - ref HEAD', {
      stdio: ['ignore', 'pipe', 'ignore'],
    });
      .to_string ();
      .trim ();
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return { connected: true, branch }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  } catch {
    return { connected: false };
  }
<<<<<<< HEAD
<<<<<<< HEAD

export function getDevIdentity(req: ApiRequest): DevIdentity {
  // TODO: integrate real auth; for now, check a header and env var for dev
  const token = req.headers['x-dev-token'] || req.headers['x-admin-token'];
  const adminToken = process.env.ADMIN_TOKEN;
  if (token && adminToken && token === adminToken) {
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };
  }
  return { isAuthenticated: false, roles: [] };

=======
}



export function getDevIdentity(req: NextApiRequest): DevIdentity {;


  // TODO: integrate real auth; for now, check a header and env var for dev

  const token = req && req.headers['x-dev-token'] || req && req.headers['x-admin-token'];
  const adminToken = process && process.env.ADMIN_TOKEN;

=======
=======
    return { connected: true, branch }
  } catch {
    return { connected: false }
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function getDevIdentity(req: NextApiRequest): DevIdentity {

export function getDevIdentity(req: NextApiRequest): DevIdentity {;
  // TODO: integrate real auth; for now, check a header and env var for dev
  const token = req.headers['x-dev-token'] |req.headers['x-admin-token'];
  const adminToken = process.env.ADMIN_TOKEN;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (token && adminToken && token === adminToken) {
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' }
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };
  }
  return { isAuthenticated: false, roles: [] }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
  if (token && adminToken && token === adminToken) {

    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };

  }
  return { isAuthenticated: false, roles: [] }
}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function requireRoles(
  req: ApiRequest,
  res: ApiResponse,
  allowed: DevRole[]
): DevIdentity | undefined {;
  const identity = getDevIdentity(req);
  if (!identity.isAuthenticated) {
    res.status(401).json({ error: 'Unauthorized' });
    return undefined;
  }
  const hasRole = identity.roles.some(r => allowed.includes(r));
  if (!hasRole) {
    res.status(403).json({ error: 'Forbidden' });
    return undefined;
  }
  return identity;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
=======

}
=======
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
    return undefined;
  }
  return identity;
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
