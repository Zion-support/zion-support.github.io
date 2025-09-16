
<<<<<<< HEAD


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

=======
;
export interface DevIdentity  {export interface DevIdentity  {isAuthenticated: boolean;roles: DevRole[];
  userId?: string;
}roles: DevRole[];
  userId?: string;
}const gitDir = path && path.join(process && process.cwd(), '.git')if (!fs && fs.existsSync(gitDir)) return { connected: false }const branch = execSync('git rev-parse --abbrev-ref HEAD', {stdio: ['ignore', 'pipe', 'ignore'];
    }).toString().trim()return { connected: true, branch }
  } catch {return { connected: false }
>>>>>>> origin/merge-pr-12271
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

<<<<<<< HEAD
export function getDevIdentity(req: NextApiRequest): DevIdentity {
  // TODO: integrate real auth; for now, check a header and env var for dev
  const token = req.headers["x-dev-token"] || req.headers["x-admin-token"];
  const adminToken = process.env.ADMIN_TOKEN;
  if (token && adminToken && token === adminToken) {
    return { isAuthenticated: true, roles: ["admin"], userId: "admin" };
  }
  return { isAuthenticated: false, roles: [] };
=======
  if (token && adminToken && token === adminToken) {}
  return { isAuthenticated: false, roles: [] }
}
  if (token && adminToken && token === adminToken) {

    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' }
    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };
  }
  return { isAuthenticated: false, roles: [] }
>>>>>>> origin/merge-pr-12271
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
