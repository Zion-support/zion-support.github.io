export interface User  {id: string;


export interface User  {id: string;
export interface User {
  }
  "id": string;
  "email": string;
  "role": 'client' | 'talent' | 'admin';'
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

export interface AuthContext {
  }
  "user": User | null;
  "login": ("email": string, "password": string) => Promise<User | null>;
  "logout": () => void;
  "register": ("email": string, "password": string, "role": User['role']) => Promise<User | null>;'
}

export function validateUser("userId": string, "role": string): User | null {
  }
  if (!userId || !role) return null;
  if (role !== 'client' && role !== 'talent' && role !== 'admin') return null;'
  
  return {
    }
    "id": userId,
    "email": '','
    "role": role as User['role']'
  };
}





export function getUserFromRequest("req": any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session
}
const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {"
    }
    return null;
  }
  return user;
    return null;
  }
  return user;
}

}


export function getUserFromRequest ("req": any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  }
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
