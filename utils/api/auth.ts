export interface User {
  id: string;
  email: string;
  role: 'client' | 'talent' | 'admin';
  name?: string;
}
ursor/automate-test-improve-and-merge-code-646c


export function validateUser(userId: string, role: string): User | null {
  if (!userId || !role) return null;
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null;
  
  return {
    id: userId,
    email: '',
    role: role as User['role']
  };
}
import { NextApiRequest, NextApiResponse } from "next";


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b



ursor/fix-website-loading-errors-and-merge-6662



import { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> main
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
    return null;
  }
  return user;
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> main
ursor/automate-test-improve-and-merge-code-646c
