import fs from &quot;fs&quot;;
import path from &quot;path&quot;;
import { execSync } from &quot;child_process&quot;;
import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;

export type DevRole = &quot;admin&quot; | &quot;maintainer&quot; | &quot;contributor&quot;;

export interface DevIdentity {
  isAuthenticated: boolean;
  roles: DevRole[];
  userId?: string;
}

export function getGitStatus(): { connected: boolean; branch?: string } {
  try {
    const gitDir = path.join(process.cwd(), &quot;.git&quot;);
    if (!fs.existsSync(gitDir)) return { connected: false };
    const branch = execSync(&quot;git rev-parse --abbrev-ref HEAD&quot;, { stdio: [&quot;ignore&quot;, &quot;pipe&quot;, &quot;ignore&quot;] })
      .toString()
      .trim();
    return { connected: true, branch };
  } catch {
    return { connected: false };
  }
}

export function getDevIdentity(req: NextApiRequest): DevIdentity {
  // TODO: integrate real auth; for now, check a header and env var for dev
  const token = req.headers[&quot;x-dev-token&quot;] || req.headers[&quot;x-admin-token&quot;];
  const adminToken = process.env.ADMIN_TOKEN;
  if (token && adminToken && token === adminToken) {
    return { isAuthenticated: true, roles: [&quot;admin&quot;], userId: &quot;admin&quot; };
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
    res.status(401).json({ error: &quot;Unauthorized&quot; });
    return undefined;
  }
  const hasRole = identity.roles.some((r) => allowed.includes(r));
  if (!hasRole) {
    res.status(403).json({ error: &quot;Forbidden&quot; });
    return undefined;
  }
  return identity;
}