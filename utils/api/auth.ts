<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

export type CurrentUser = {
  userId: string;
  role: 'client' | 'talent' | 'admin';
};

export function getCurrentUser(req: NextApiRequest): CurrentUser | null {
  const headerUser = req.headers['x-user-id'];
  const headerRole = req.headers['x-user-role'] as string | undefined;

  const cookie = req.cookies || {};
  const cookieUser = cookie['x-user-id'];
  const cookieRole = cookie['x-user-role'];

  const userId = (headerUser as string) || cookieUser;
  const role =
    (headerRole as CurrentUser['role']) || (cookieRole as CurrentUser['role']);

  if (!userId || !role) return null;
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null;

  return { userId, role };
}

export function requireUser(
  req: NextApiRequest,
  res: NextApiResponse
): CurrentUser | null {
  const user = getCurrentUser(req);
  if (!user) {
    res.status(401).json({ error: 'Unauthorized' });
    return null;
  }
  return user;
}
=======
 if (!userId || !role) return null;
if (role !== 'client' && role !== 'talent' && role !== 'admin') return null;
}return user 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
