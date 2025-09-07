<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
export interface User  {id: string;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
export interface User {
  id: string;
  email: string;
  role: 'client' | 'talent' | 'admin';
  name?: string;
}
ursor/automate-test-improve-and-merge-code-646c;
export interface AuthContext  {user: User | null;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => void;
  register: (email: string, password: string, role: User['role']) => Promise<User | null>;
}export function validateUser(userId: string, role: string): User | null {if (!userId || !role) return null;
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null;return {id: userId,email: '',role: role as User['role'];
  }}
import { NextApiRequest, NextApiResponse  } from 'next';
ursor/fix-website-loading-errors-and-merge-6662;
ursor/fix-website-loading-errors-and-merge-6662;
export function getUserFromRequest(req: any): User | null {// Mock implementation - in production, this would extract user from JWT or session;
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {return null;
  }
  return user;
}return null;
  }
  return user;
}export function getUserFromRequest (req: any): User | null {// Mock implementation - in production, this would extract user from JWT or session;
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
import { NextApiRequest, NextApiResponse } from "next";
origin/cursor/expand-services-advertise-and-build-project-c28b





ursor/fix-website-loading-errors-and-merge-6662



import { NextApiRequest, NextApiResponse } from 'next';

main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
<<<<<<< HEAD

    return null;
  }
  return user;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    return null;
  }
  return user;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
}
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

origin/cursor/expand-services-advertise-and-build-project-c28b

main

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
