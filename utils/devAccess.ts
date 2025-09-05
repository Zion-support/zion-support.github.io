<<<<<<< HEAD
import fs from "fs",
import path from "path",
import { execSync } from "child_process",
import type { NextApiRequest, NextApiResponse } from "next",
=======
import fs from "fs";
import path from "path";
import type {_NextApiRequest, _NextApiResponse} from "next";
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export type DevRole = "admin" | "maintainer" | "contributor",

<<<<<<< HEAD
export interface DevIdentity {
  isAuthenticated: boolean,
  roles: DevRole[],
  userId?: string
}

export function getGitStatus(): { connected: boolean, branch?: string } {
  try {
    const gitDir = path.join(process.cwd(), ".git"),
    if (!fs.existsSync(gitDir)) return { connected: false },
    const branch = execSync("git rev-parse --abbrev-ref HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim(),
    return { connected: true, branch }
  } catch {
    return { connected: false }
  }
}

export function getDevIdentity(req: NextApiRequest): DevIdentity {
  // TODO: integrate real auth, for now, check a header and env var for dev
  const token = req.headers["x-dev-token"] || req.headers["x-admin-token"],
  const adminToken = process.env.ADMIN_TOKEN,
  if (token && adminToken && token === adminToken) {
    return { isAuthenticated: true, roles: ["admin"], userId: "admin" }
  }
  return { isAuthenticated: false, roles: [] }
}

export function requireRoles(
  req: NextApiRequest,
  res: NextApiResponse,
  allowed: DevRole[]
): DevIdentity | undefined {
  const identity = getDevIdentity(req),
  if (!identity.isAuthenticated) {
    res.status(401).json({ error: "Unauthorized" }),
    return undefined
  }
  const hasRole = identity.roles.some((r) => allowed.includes(r)),
  if (!hasRole) {
    res.status(403).json({ error: "Forbidden" }),
    return undefined
=======
export interface DevIdentity {_isAuthenticated: boolean;
  roles: DevRole[];
  userId?: string;}

export function getGitStatus(): {_connected: boolean; branch?: string} {_try {
    const _gitDir = path.join(process.cwd(), _".git");
    if (!fs.existsSync(gitDir)) return { connected: false};
    const _branch = execSync("git rev-parse --abbrev-ref HEAD", {_stdio: ["ignore", _"pipe", _"ignore"]})
      .toString()
      .trim();
    return {_connected: true, _branch};
  } catch {_return { connected: false};
  }
}

export function getDevIdentity(_req: NextApiRequest): DevIdentity {_// TODO: integrate real auth; for now, _check a header and env var for dev
  const _token = req.headers["x-dev-token"] || req.headers["x-admin-token"];
  const _adminToken = process.env.ADMIN_TOKEN;
  if (token && adminToken && token === adminToken) {
    return { isAuthenticated: true, _roles: ["admin"], _userId: "admin"};
  }
  return {_isAuthenticated: false, _roles: []};
}

export function requireRoles(_req: NextApiRequest, _res: NextApiResponse, _allowed: DevRole[]): DevIdentity | undefined {_const _identity = getDevIdentity(req);
  if (!identity.isAuthenticated) {
    res.status(401).json({ error: "Unauthorized"});
    return undefined;
  }
  const _hasRole = identity.roles.some(_(r) => allowed.includes(r));
  if (!hasRole) {_res.status(403).json({ error: "Forbidden"});
    return undefined;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  return identity
}