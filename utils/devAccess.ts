import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { exec_sync } from 'child_process';
import type { NextApiRequest, NextApiResponse } from 'next';
export type DevRole = 'admin' | 'maintainer' | 'contributor';
export interface DevIdentity {
  is_authenticated: boolean;
=======
import { execSync } from 'child_process';
import type { NextApiRequest, NextApiResponse } from 'next';
export type DevRole = 'admin' | 'maintainer' | 'contributor';
<<<<<<< HEAD
export interface DevIdentity {
=======

export interface DevIdentity {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  isAuthenticated: boolean;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  roles: DevRole[];
  user_id?: string;
}
export function getGitStatus(): { connected: boolean; branch?: string } {
  try {
    const gitDir = path.join(process.cwd(), '.git');
    if (!fs.existsSync(gitDir)) return { connected: false }
    const branch = execSync('git rev-parse --abbrev-ref HEAD', {
      stdio: ['ignore', 'pipe', 'ignore']
    })
      .toString()
      .trim();
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
    return { connected: true, branch }
  } catch {
    return { connected: false }
  }
}
<<<<<<< HEAD
export function getDevIdentity(req: NextApiRequest): DevIdentity {
=======
<<<<<<< HEAD
export function getDevIdentity(req: NextApiRequest): DevIdentity {
=======

export function getDevIdentity(req: NextApiRequest): DevIdentity {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  // TODO: integrate real auth; for now, check a header and env var for dev
  const token = req.headers['x-dev-token'] |req.headers['x-admin-token'];
  const adminToken = process.env.ADMIN_TOKEN;
  if (token && adminToken && token === adminToken) {
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' }
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
<<<<<<< HEAD
=======

}
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
