export interface DevIdentity {

export interface DevIdentity {;
  isAuthenticated: boolean;    const branch = execSync('git rev-parse --abbrev-ref HEAD', {
      stdio: ['ignore', 'pipe', 'ignore']
    })
      .toString()
      .trim();
    return { connected: true, branch }
  } catch {
    return { connected: false }
  }
}

export function getDevIdentity(req: NextApiRequest): DevIdentity {;

  // TODO: integrate real auth; for now, check a header and env var for dev

  const token = req && req.headers['x-dev-token'] || req && req.headers['x-admin-token'];
  const adminToken = process && process.env.ADMIN_TOKEN;

  if (token && adminToken && token === adminToken) {
  }
  return { isAuthenticated: false, roles: [] }
}
  }
  return { isAuthenticated: false, roles: [] }
}
  if (token && adminToken && token === adminToken) {

    return { isAuthenticated: true, roles: ['admin'], userId: 'admin' };

  }
  return { isAuthenticated: false, roles: [] }
}

