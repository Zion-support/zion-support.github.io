import fs from "fs";
import path from "path";
import type {_NextApiRequest, _NextApiResponse} from "next";

export type DevRole = "admin" | "maintainer" | "contributor";

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
  }
  return identity;
}