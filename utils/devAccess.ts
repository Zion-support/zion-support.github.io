<<<<<<< HEAD
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
export interface DevIdentity  {export interface DevIdentity  {isAuthenticated: boolean;roles: DevRole[];
  userId?: string;
}roles: DevRole[];
  userId?: string;
}const gitDir = path && path.join(process && process.cwd(), '.git')if (!fs && fs.existsSync(gitDir)) return { connected: false }const branch = execSync('git rev-parse --abbrev-ref HEAD', {stdio: ['ignore', 'pipe', 'ignore'];
    }).toString().trim()return { connected: true, branch }
  } catch {return { connected: false }
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
export interface DevIdentity {

export interface DevIdentity {;
  isAuthenticated: boolean;
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


  roles: DevRole[];
  userId?: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

    const gitDir = path && path.join(process && process.cwd(), '.git');
    if (!fs && fs.existsSync(gitDir)) return { connected: false };

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
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
    const branch = execSync('git rev-parse --abbrev-ref HEAD', {
      stdio: ['ignore', 'pipe', 'ignore']
    })
      .toString()
      .trim();
    return { connected: true, branch }
  } catch {
    return { connected: false }
  }
}export function getDevIdentity(req: NextApiRequest): DevIdentity {// TODO: integrate real auth; for now, check a header and env var for dev;
  const token = req && req.headers['x-dev-token'] || req && req.headers['x-admin-token'];
<<<<<<< HEAD
  const adminToken = process && process.env.ADMIN_TOKEN;

  if (token && adminToken && token === adminToken) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const adminToken  = process && process.env.ADMIN_TOKEN;if (token && adminToken && token === adminToken) {}
  return { isAuthenticated: false, roles: [] }
}export function requireRoles() {return { isAuthenticated: true, roles: ['admin'], userId: 'admin' }}
  return { isAuthenticated: false, roles: [] }
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  }
  return { isAuthenticated: false, roles: [] }
}
  if (token && adminToken && token === adminToken) {return { isAuthenticated: true, roles: ['admin'], userId: 'admin' }return { isAuthenticated: true, roles: ['admin'], userId: 'admin' }}
  return { isAuthenticated: false, roles: [] }
}if (token && adminToken && token === adminToken) {return { isAuthenticated: true, roles: ['admin'], userId: 'admin' }}
  return { isAuthenticated: false, roles: [] }
}ursor/fix-website-loading-errors-and-merge-6662;
export function requireRoles(req: NextApiRequest;
  res: NextApiResponse;
  allowed: DevRole[];
): DevIdentity | undefined {const identity = getDevIdentity(req)if (!identity.isAuthenticated) {res.status(401).json({ error: "Unauthorized" })return undefined;
  const adminToken = process && process.env.ADMIN_TOKEN;

  if (token && adminToken && token === adminToken) {}
  return { isAuthenticated: false, roles: [] }
}
  if (token && adminToken && token === adminToken) {

    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' }
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  if (token && adminToken && token === adminToken) {

origin/cursor/expand-services-advertise-and-build-project-c28b
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
  }
  return { isAuthenticated: false, roles: [] }
}
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
  }
  return { isAuthenticated: false, roles: [] }
}

  if (token && adminToken && token === adminToken) {

    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  }
  return { isAuthenticated: false, roles: [] }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======






>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
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
  const hasRole = identity.roles.some((r) => allowed.includes(r))if (!hasRole) {const identity = getDevIdentity(req)if (!identity.isAuthenticated) {res.status(401).json({ error: 'Unauthorized' })return undefined;
  }
  const hasRole = identity.roles.some(r => allowed.includes(r))if (!hasRole) {res && res.status(403).json({ error: 'Forbidden' })return undefined;
  }
  return identity;}// Development access utilities;
export interface DevAccessConfig  {enabled: boolean;
  return identity;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

}
origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
// Development access utilities
export interface DevAccessConfig {
  enabled: boolean;
  allowedIps: string[];
  allowedUsers: string[];
  requireAuth: boolean;
  maxRequestsPerMinute: number;
}export interface DevUser  {id: string;
  name: string;
  email: string;
  role: 'developer' | 'admin' | 'tester';
  permissions: string[];
  lastAccess: Date;
}class DevAccessManager {private config: DevAccessConfig;
  private users: Map<string, DevUser> = new Map()private accessLog: Array<{ ip: string; user: string; timestamp: number; action: string }> = [];constructor(config: DevAccessConfig) {this.config = config;
  }isDevAccessEnabled(): boolean {return this.config.enabled;
  }isIpAllowed(ip: string): boolean {if (!this.config.enabled) return false;
    return this.config.allowedIps.includes(ip) || this.config.allowedIps.includes('*')}isUserAllowed(userId: string): boolean {if (!this.config.enabled) return false;
    return this.config.allowedUsers.includes(userId) || this.config.allowedUsers.includes('*')}hasPermission(userId: string, permission: string): boolean {const user = this.users.get(userId)if (!user) return false;
    return user.permissions.includes('*') || user.permissions.includes(permission)}logAccess(ip: string, user: string, action: string): void {this.accessLog.push({ip,user,timestamp: Date.now(),action;
    })// Keep only last 1000 entries;
    if (this.accessLog.length > 1000) {this.accessLog = this.accessLog.slice(-1000)}
  }getAccessLog(): Array<{ ip: string; user: string; timestamp: number; action: string }> {return [...this.accessLog];
  }addUser(user: DevUser): void {this.users.set(user.id, user)}removeUser(userId: string): boolean {return this.users.delete(userId)}getUser(userId: string): DevUser | undefined {return this.users.get(userId)}getAllUsers(): DevUser[] {return Array.from(this.users.values())}updateConfig(newConfig: Partial<DevAccessConfig>): void {this.config = { ...this.config, ...newConfig }}getConfig(): DevAccessConfig {return { ...this.config }}
}// Default configuration;
const defaultConfig: DevAccessConfig = {enabled: process.env.NODE_ENV === 'development',allowedIps: ['127.0.0.1', '::1', 'localhost'],allowedUsers: ['*'],requireAuth: false,maxRequestsPerMinute: 100;
}// Singleton instance;
export const devAccessManager  = new DevAccessManager(defaultConfig)// Middleware for development access;
export function requireDevAccess() {if (!devAccessManager.isDevAccessEnabled()) {return res.status(404).json({ error: 'Not found' })}const ip = req.ip || req.connection.remoteAddress || 'unknown';
  if (!devAccessManager.isIpAllowed(ip)) {return res.status(403).json({ error: 'Access denied' })}devAccessManager.logAccess(ip, req.user?.id || 'anonymous', req.path)next()}// Utility functions;
export function isDevelopmentMode(): boolean {return process.env.NODE_ENV === 'development';
}export function isProductionMode(): boolean {return process.env.NODE_ENV === 'production';
}export function getClientIp(req: any): string {return req.ip ||;
         req.connection.remoteAddress ||;
         req.socket.remoteAddress ||;
         (req.connection.socket ? req.connection.socket.remoteAddress : null) ||;
         'unknown';
}export function getDevIdentity (req: NextApiRequest): DevIdentity {// TODO: integrate real auth; for now, check a header and env var for dev;
}

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
export function getDevIdentity (req: NextApiRequest): DevIdentity {
  // TODO: integrate real auth; for now, check a header and env var for dev;
  const token = req.headers['x - dev - token'] || req.headers['x - admin - token'];
  const admin_token = process.env.ADMIN_TOKEN;
  // Check condition;
if ( {) {$2;
}
    return { is_authenticated: true, roles: ['admin'], user_id: 'admin' }
  }
  return { is_authenticated: false, roles: [] }
}
export function require_roles (req: NextApiRequest,res: NextApiResponse,allowed: DevRole[]): DevIdentity | undefined {const identity = getDevIdentity (req)// Check condition;
if ( {) {$2;
}
    res.status (401).json ({ error: 'Unauthorized' })return undefined;
  }
  const has_role = identity.roles.some (r => allowed.includes (r))// Check condition;
if ( {) {$2;
}
    res.status (403).json ({ error: 'Forbidden' })return undefined;
  }
  return identity;
}ursor/fix-website-loading-errors-and-merge-6662;
}
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d




<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
