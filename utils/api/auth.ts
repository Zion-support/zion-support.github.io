






import { NextApiRequest, NextApiResponse } from 'next';

export interface User {
interface User {
  id: string;
  role: 'client' | 'talent' | 'admin';
  name?: string;
}

export interface AuthContext {
  user: User | null;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => void;
  register: (email: string, password: string, role: User['role']) => Promise<User | null>;
  email: string;
  name: string;
}

export function validateUser(userId: string, role: string): User | null {
  if (!userId || !role) return null;
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null;
  
  return {
    id: userId,
    role: role as 'client' | 'talent' | 'admin',
    email: '',
    name: ''
  };
}
import { NextApiRequest, NextApiResponse } from "next";


origin/cursor/expand-services-advertise-and-build-project-c28b



ursor/fix-website-loading-errors-and-merge-6662



import { NextApiRequest, NextApiResponse } from 'next';
main
export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  return user;
}


export function getUserFromRequest (req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {
  $2

}
origin/cursor/expand-services-advertise-and-build-project-c28b
main
origin/cursor/automate-test-improve-and-merge-code-2533
  // TODO: Implement
}
  id: string;,
  email: string;
  role: 'client' | 'talent' | 'admin';
  name?: string;

  // TODO: Implement
  user: User | null;,
  login: (email: string, password: string) => Promise<User | null>;

  register: (email: string, password: string, role: User['role']) => Promise<User | null>;
pr-12325
}






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
