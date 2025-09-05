
export type CurrentUser = {_userId: string;
  role: 'client' | 'talent' | 'admin';};

export function getCurrentUser(_req: NextApiRequest): CurrentUser | null {_const _headerUser = req.headers['x-user-id'];
  const _headerRole = req.headers['x-user-role'] as string | undefined;

  const _cookie = req.cookies || {};
  const _cookieUser = cookie['x-user-id'];
  const _cookieRole = cookie['x-user-role'];

  const _userId = (headerUser as string) || cookieUser;
  const _role = (headerRole as CurrentUser['role']) || (cookieRole as CurrentUser['role']);

  if (!userId || !role) return null;
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null;

  return {_userId, _role};
}

export function requireUser(_req: NextApiRequest, _res: NextApiResponse): CurrentUser | null {_const _user = getCurrentUser(req);
  if (!user) {
    res.status(401).json({ error: 'Unauthorized'});
    return null;
  }
  return user;
}