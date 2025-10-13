import { NextApiRequest, NextApiResponse } from 'next';';';
export function getUserFromRequest(req: any): User | null {
  // TODO: Add properties
}
  // TODO: Add properties
}
  // Mock implementation - in production, this would extract user from JWT or session;
const authHeader = req.headers.authorization
  if (!authHeader |!authHeader.startsWith('Bearer ')) {'
    return null
  }
  return user
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662;
import { NextApiRequest, NextApiResponse } from 'next';';';
export type CurrentUser = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  userId: string
  role: 'client' | 'talent' | 'admin''
}
export function getCurrentUser(req: NextApiRequest): CurrentUser | null {;
const headerUser = req.headers['x-user-id'];';
const headerRole = req.headers['x-user-role'] as string | undefined;';
const cookie = req.cookies || {}
  const cookieUser = cookie['x-user-id'];';
const cookieRole = cookie['x-user-role'];';
const userId = (headerUser as string) || cookieUser;
const role = (headerRole as CurrentUser['role']) || (cookieRole as CurrentUser['role'])'
  if (!userId || !role) return null
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null'
  return { userId, role }
}
export function requireUser(
  // TODO: Add parameters
)
  req: NextApiRequest,
  res: NextApiResponse
): CurrentUser | null {;
const user = getCurrentUser(req)
  if (!user) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    res.status(401).json({ error: 'Unauthorized' })'
    return null
  }
  return user
}
