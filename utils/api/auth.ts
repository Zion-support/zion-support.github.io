export interface User {
  id: string;
  email: string;
  role: 'client' | 'talent' | 'admin';
  name?: string;
}

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
}
import { NextApiRequest, NextApiResponse } from "next";
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
    return null;
  }
  return user;
}
origin/cursor/expand-services-advertise-and-build-project-c28b
main
origin/cursor/automate-test-improve-and-merge-code-2533
export interface User {
  // TODO: Implement
}
  id: string;,
  email: string;
  role: 'client' | 'talent' | 'admin';
  name?: string;

export interface AuthContext {
  // TODO: Implement
  user: User | null;,
  login: (email: string, password: string) => Promise<User | null>;

  register: (email: string, password: string, role: User['role']) => Promise<User | null>;
pr-12325
