<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { NextApiRequest, NextApiResponse } from "next";
=======
import { NextApiRequest, NextApiResponse } from "next";
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    return null;
  }
  return user;
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
=======
<<<<<<< HEAD
=======

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
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
