<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import type { NextApiRequest, NextApiResponse } from 'next';

export type DevRole = 'admin' | 'maintainer' | 'contributor';

export interface DevIdentity {
  isAuthenticated: boolean;
  roles: DevRole[];
  userId?: string;

export function getGitStatus(): { connected: boolean; branch?: string } {
  try {
    const gitDir = path.join(process.cwd(), '.git');
    if (!fs.existsSync(gitDir)) return { connected: false };
    const branch = execSync('git rev-parse --abbrev-ref HEAD', {
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim();
    return { connected: true, branch };
  } catch {
    return { connected: false };
  }

export function getDevIdentity(req: NextApiRequest): DevIdentity {
  // TODO: integrate real auth; for now, check a header and env var for dev
  const token = req.headers['x-dev-token'] || req.headers['x-admin-token'];
  const adminToken = process.env.ADMIN_TOKEN;
  if (token && adminToken && token === adminToken) {
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };
  }
  return { isAuthenticated: false, roles: [] };

export function requireRoles(
  req: NextApiRequest,
  res: NextApiResponse,
  allowed: DevRole[]
): DevIdentity | undefined {
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
