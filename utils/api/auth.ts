<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next',

export type CurrentUser = {
  userId: string,
  role: 'client' | 'talent' | 'admin'
},

export function getCurrentUser(req: NextApiRequest): CurrentUser | null {
  const headerUser = req.headers['x-user-id'],
  const headerRole = req.headers['x-user-role'] as string | undefined,

  const cookie = req.cookies || {},
  const cookieUser = cookie['x-user-id'],
  const cookieRole = cookie['x-user-role'],

  const userId = (headerUser as string) || cookieUser,
  const role = (headerRole as CurrentUser['role']) || (cookieRole as CurrentUser['role']),
=======

export type CurrentUser = {_userId: string;
  role: 'client' | 'talent' | 'admin';};

export function getCurrentUser(_req: NextApiRequest): CurrentUser | null {_const _headerUser = req.headers['x-user-id'];
  const _headerRole = req.headers['x-user-role'] as string | undefined;

  const _cookie = req.cookies || {};
  const _cookieUser = cookie['x-user-id'];
  const _cookieRole = cookie['x-user-role'];

  const _userId = (headerUser as string) || cookieUser;
  const _role = (headerRole as CurrentUser['role']) || (cookieRole as CurrentUser['role']);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!userId || !role) return null,
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null,

<<<<<<< HEAD
  return { userId, role }
}

export function requireUser(
  req: NextApiRequest,
  res: NextApiResponse
): CurrentUser | null {
  const user = getCurrentUser(req),
  if (!user) {
    res.status(401).json({ error: 'Unauthorized' }),
    return null
=======
  return {_userId, _role};
}

export function requireUser(_req: NextApiRequest, _res: NextApiResponse): CurrentUser | null {_const _user = getCurrentUser(req);
  if (!user) {
    res.status(401).json({ error: 'Unauthorized'});
    return null;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
  return user
}