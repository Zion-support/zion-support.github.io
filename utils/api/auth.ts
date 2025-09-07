<<<<<<< HEAD


=======
export interface User  {id: string;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
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



<<<<<<< HEAD







import { NextApiRequest, NextApiResponse } from 'next';


=======


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
    return null;
  }
  return user;
}
<<<<<<< HEAD


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5


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






=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-3ea5
