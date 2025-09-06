



  roles: DevRole[];
  userId?: string;
}



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


export function requireRoles(

  req: NextApiRequest
  res: NextApiResponse
  allowed: DevRole[]
): DevIdentity | undefined {;

  const identity = getDevIdentity(req);
  if (!identity.isAuthenticated) {
    res.status(401).json({ error: "Unauthorized" });
    return undefined;
  }
  const hasRole = identity.roles.some((r) => allowed.includes(r));
  if (!hasRole) {

    res && res.status(403).json({ error: 'Forbidden' });
    return undefined;
  }
  return identity;

    return undefined;
  }
  return identity;
}




