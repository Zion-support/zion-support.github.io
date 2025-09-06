<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';
export type CurrentUser = {;
  userId: string;
  role: 'client' | 'talent' | 'admin';
};
export function getCurrentUser(req: NextApiRequest): CurrentUser | null {;
  const headerUser = req.headers['x-user-id'];
  const headerRole = req.headers['x-user-role'] as string | undefined;
  const cookie = req.cookies || {};
  const cookieUser = cookie['x-user-id'];
  const cookieRole = cookie['x-user-role'];
  const userId = (headerUser as string) || cookieUser;
  const role = (headerRole as CurrentUser['role']) || (cookieRole as CurrentUser['role']);
  if (!userId || !role) return null;
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null;
  return { userId, role }
}
;
export function requireUser(;
  req: NextApiRequest;
  res: NextApiResponse;
): CurrentUser | null {;
  const user = getCurrentUser(req);
  if (!user) {;
    res.status(401).json({ error: 'Unauthorized' });
    return null;
  }
  return user;
}
=======
<<<<<<< HEAD


<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======



import { NextApiRequest, NextApiResponse } from 'next';
export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const authHeader = req.headers.authorization;
  if (!authHeader |!authHeader.startsWith('Bearer ')) {
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    return null;
  }
  return user;
}

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


export function getUserFromRequest (req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {
  $2
}
    return null;
  }
  return user;
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
