<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
export interface User {
  id: string;
  email: string;
  role: 'client' | 'talent' | 'admin';
  name?: string;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

export interface AuthContext {
  user: User | null;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => void;
  register: (email: string, password: string, role: User['role']) => Promise<User | null>;
}

export function validateUser(userId: string, role: string): User | null {
  if (!userId || !role) return null;
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null;
  
  return {
    id: userId,
    email: '',
    role: role as User['role']
  };
}export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  return user;
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { NextApiRequest, NextApiResponse } from "next";
import { NextApiRequest, NextApiResponse } from "next";
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a







import { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
main
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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


<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

import { NextApiRequest, NextApiResponse } from 'next';
main
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
<<<<<<< HEAD
<<<<<<< HEAD

    return null;
  }
  return user;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return null;
  }
  return user;
}
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

export function getUserFromRequest (req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {
  $2
}
    return null;
  }
  return user;
<<<<<<< HEAD
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

origin/cursor/expand-services-advertise-and-build-project-c28b

main

origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
