import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import type { NextApiRequest, NextApiResponse } from "next";
export type DevRole = $2;
export interface DevIdentity {
  isAuthenticated: boolean,
  roles: DevRole[],
  userId?: string
}

export function getGitStatus(): { connected: boolean, branch?: string } {
  try {
    const gitDir = path.join(process.cwd(), ".git"),
    if (!fs.existsSync(gitDir)) return { connected: false},
    const branch = execSync("git rev-parse --abbrev-ref HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim($2);
    return { connected: true, branch }
  } catch {
    return { connected: false}
  }

  if (config.allowedIPs.includes(ip)) {
    return true;
  }

  if (user && config.allowedUsers.includes(user)) {
    return true;
  }

  return false;
}

export function getDevIdentity(req: NextApiRequest): DevIdentity {
  // TODO: integrate real auth, for now, check a header and env var for dev
  const token = $2;
  const adminToken = $2;
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
  const identity = getDevIdentity($2);
  if (!identity.isAuthenticated) {
    res.status(401).json($2);
    return undefined
  }
  const hasRole = $2;
  if (!hasRole) {
    res.status(403).json($2);
    return undefined
  }
  return identity
}