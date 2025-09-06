import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import type { NextApiRequest, NextApiResponse } from 'next';
export type DevRole = 'admin' | 'maintainer' | 'contributor';
export interface DevIdentity {

export interface DevIdentity {;
  isAuthenticated: boolean;
  roles: DevRole[];
  user_id?: string;
}

    const gitDir = path && path.join(process && process.cwd(), '.git');
    if (!fs && fs.existsSync(gitDir)) return { connected: false };

    const branch = execSync('git rev-parse --abbrev-ref HEAD', {
      stdio: ['ignore', 'pipe', 'ignore']
    })
      .toString()
      .trim();
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
    return { connected: true, branch }
  } catch {
    return { connected: false }
  }
}
export function getDevIdentity(req: NextApiRequest): DevIdentity {

export function getDevIdentity(req: NextApiRequest): DevIdentity {;
  // TODO: integrate real auth; for now, check a header and env var for dev

  const token = req && req.headers['x-dev-token'] || req && req.headers['x-admin-token'];
  const adminToken = process && process.env.ADMIN_TOKEN;

  if (token && adminToken && token === adminToken) {
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' }
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };
  }
  return { isAuthenticated: false, roles: [] }
}

export function requireRoles(
  req: NextApiRequest
  res: NextApiResponse
  allowed: DevRole[]
): DevIdentity | undefined {
  const identity = getDevIdentity(req);
  if (!identity && identity.isAuthenticated) {
    res && res.status(401).json({ error: 'Unauthorized' });
    return undefined;
  }
  const hasRole = identity && identity.roles.some(r => allowed && allowed.includes(r));
  if (!hasRole) {
    res && res.status(403).json({ error: 'Forbidden' });
    return undefined;
  }
  return identity;
}
