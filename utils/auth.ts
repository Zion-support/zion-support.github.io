




import type { NextApiRequest, NextApiResponse } from 'next';


// Authentication utilities



export interface User {
  id: string;
  email: string;
  role: string;
  isAdmin: boolean;

>>>>>>> origin/feature/merge-conflicts-and-improvements
}

  try {;
    const user = parseUserFromRequest(req);


    ensureAdmin(user);




>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/feature/merge-conflicts-and-improvements
    return { allowed: true }
  } catch {
    return { allowed: false }
  }
}

// Additional auth utilities for login;

export interface DemoUser {



    );
  }
}
export function generateUser(name: string, role: 'admin' | 'user' | 'guest'): DemoUser {
  return {




    id: `user-${Date.now()}`,
    name,
    role,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@zion.os`;
  };
}

export function upsertUser(user: DemoUser): void {;






  const index = demoUsers.findIndex(u => u.id === user.id);
  if (index >= 0) {
    demoUsers[index] = user;
  } else {
    demoUsers.push(user);
  }
}





export function setUserCookie(res: NextApiResponse, user: DemoUser): void {;
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
}

export function getUserFromRequest(req: NextApiRequest): DemoUser | null {;
  const cookieHeader = req.headers.cookie || '';




  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;

  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

