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

export interface DevIdentity {;

  isAuthenticated: boolean;

  roles: DevRole[];
  user_id?: string;
}


export function getGitStatus(): { connected: boolean; branch?: string } {
  try {
    const gitDir = path.join(process.cwd(), '.git');
    if (!fs.existsSync(gitDir)) return { connected: false };

    const branch = execSync('git rev-parse --abbrev-ref HEAD', {
      stdio: ['ignore', 'pipe', 'ignore'],
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
    return { connected: false };
  }

}

export function getDevIdentity(req: NextApiRequest): DevIdentity {

export function getDevIdentity(req: NextApiRequest): DevIdentity {;

  // TODO: integrate real auth; for now, check a header and env var for dev

  const token = req && req.headers['x-dev-token'] || req && req.headers['x-admin-token'];
  const adminToken = process && process.env.ADMIN_TOKEN;

  if (token && adminToken && token === adminToken) {

    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };
  }
  return { isAuthenticated: false, roles: [] }
}
  if (token && adminToken && token === adminToken) {




  }
  return { isAuthenticated: false, roles: [] }
}




export function requireRoles(
  req: ApiRequest,
  res: ApiResponse,
  allowed: DevRole[]
): DevIdentity | undefined {
  const identity = getDevIdentity(req);
  if (!identity && identity.isAuthenticated) {
    res && res.status(401).json({ error: 'Unauthorized' });
    return undefined;
  }
  const hasRole = identity && identity.roles.some(r => allowed && allowed.includes(r));
  if (!hasRole) {


    res.status(403).json({ error: 'Forbidden' });

    return undefined;
  }
  return identity;


}



    return undefined;
  }
  return identity;
}




>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> origin/feature/merge-conflicts-and-improvements


=======
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import type { NextApiRequest, NextApiResponse } from "next";

export type DevRole = "admin" | "maintainer" | "contributor";

export interface DevIdentity {
  isAuthenticated: boolean;
  roles: DevRole[];
  userId?: string;
}

export function getGitStatus(): { connected: boolean; branch?: string } {
  try {
    const gitDir = path.join(process.cwd(), ".git");
    if (!fs.existsSync(gitDir)) return { connected: false };
    const branch = execSync("git rev-parse --abbrev-ref HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
    return { connected: true, branch };
  } catch {
    return { connected: false };
  }
}

export function getDevIdentity(req: NextApiRequest): DevIdentity {
  // TODO: integrate real auth; for now, check a header and env var for dev
  const token = req.headers["x-dev-token"] || req.headers["x-admin-token"];
  const adminToken = process.env.ADMIN_TOKEN;
  if (token && adminToken && token === adminToken) {
    return { isAuthenticated: true, roles: ["admin"], userId: "admin" };
  }
  return { isAuthenticated: false, roles: [] };
}

export function requireRoles(
  req: NextApiRequest,
  res: NextApiResponse,
  allowed: DevRole[]
): DevIdentity | undefined {
  const identity = getDevIdentity(req);
  if (!identity.isAuthenticated) {
    res.status(401).json({ error: "Unauthorized" });
    return undefined;
  }
  const hasRole = identity.roles.some((r) => allowed.includes(r));
  if (!hasRole) {
    res.status(403).json({ error: "Forbidden" });
    return undefined;
  }
  return identity;
}
>>>>>>> origin/auto/autonomy-17186719616
