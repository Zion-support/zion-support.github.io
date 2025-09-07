export interface User  {id: string;


export interface User  {id: string;
export interface User {
  id: string;
  email: string;
  role: 'client' | 'talent' | 'admin';
  name?: string;
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
import { NextApiRequest, NextApiResponse } from "next";
import { NextApiRequest, NextApiResponse } from "next";
origin/cursor/expand-services-advertise-and-build-project-c28b










import { NextApiRequest, NextApiResponse } from 'next';







export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {

    return null;
  }
  return user;
    return null;
  }
  return user;
}

}


export function getUserFromRequest (req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {$2;
}
    return null;
  }
  return user;
}ursor/automate-test-improve-and-merge-code-646c;
}

origin/cursor/expand-services-advertise-and-build-project-c28b

main

origin/cursor/automate-test-improve-and-merge-code-2533






  return user
}
