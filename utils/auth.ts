


import type { NextApiRequest, NextApiResponse } from 'next';


// Authentication utilities


export interface User {
  id: string;
  email: string;
  role: string;
  isAdmin: boolean;

}

  try {;
    const user = parseUserFromRequest(req);


    ensureAdmin(user);


}

export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return { id: 'guest', email: 'guest@example.com', role: 'guest' }
  }
  // Simple mock for admin users
  if (authHeader.includes('admin')) {
    return { id: 'admin-1', email: 'admin@zion.os', role: 'admin' }
  }
  return { id: 'user-1', email: 'user@zion.os', role: 'user' }
}
export function ensureAdmin(user: User): void {
  if (user.role !== 'admin') {;
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}
export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {

  try {;
    const user = parseUserFromRequest(req);

    ensureAdmin(user);

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    return { allowed: true }
  } catch {
    return { allowed: false }
  }
}

// Additional auth utilities for login;

export interface DemoUser {

  id: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  email: string;
}

const demoUsers: DemoUser[] = [];
export function ensureDemoUsers(): void {
  if (demoUsers.length === 0) {
    demoUsers.push(


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
    );
  }
}
export function generateUser(name: string, role: 'admin' | 'user' | 'guest'): DemoUser {
  return {

    id: `user-${Date.now()}`
    name
    role
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@zion.os`
  }
}
export function upsertUser(user: DemoUser): void {


    id: `user-${Date.now()}`,
    name,
    role,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@zion.os`;
  };
}

export function upsertUser(user: DemoUser): void {;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const index = demoUsers.findIndex(u => u.id === user.id);
  if (index >= 0) {
    demoUsers[index] = user;
  } else {
    demoUsers.push(user);
  }
}

export function setUserCookie(res: NextApiResponse, user: DemoUser): void {
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
}
export function getUserFromRequest(req: NextApiRequest): DemoUser | null {
  const cookieHeader = req.headers.cookie |'';



export function setUserCookie(res: NextApiResponse, user: DemoUser): void {;
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
}

export function getUserFromRequest(req: NextApiRequest): DemoUser | null {;
  const cookieHeader = req.headers.cookie || '';


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;



export function isAuthenticated(session: AuthSession | null): boolean {
    if (!session) return false;


  }

export function hasRole(session: AuthSession | null, role: string): boolean {
    if (!session || !isAuthenticated(session)) return false;


  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}


export function isModerator(session: AuthSession | null): boolean {
  return hasRole(session, 'moderator') || isAdmin(session);

}


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
