import { NextApiRequest, NextApiResponse } from 'next';
export type CurrentUser = $2;
  role: 'client' | 'talent' | 'admin'
},

export function getCurrentUser(req: NextApiRequest): CurrentUser | null {
  const headerUser = $2;
  const headerRole = $2;
  const cookie = $2;
  const cookieUser = $2;
  const cookieRole = $2;
  const userId = $2;
  const role = $2;
  if (!userId || !role) return null,
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null,

  return { userId, role }
}

export function requireUser(
  req: NextApiRequest,
  res: NextApiResponse): CurrentUser | null {
  const user = getCurrentUser($2);
  if (!user) {
    res.status(401).json($2);
    return null
  }
  return user
}