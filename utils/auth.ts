


import type { NextApiRequest, NextApiResponse } from 'next';


// Authentication utilities


export interface User {
  id: string;
  email: string;
  role: string;
  isAdmin: boolean;
<<<<<<< HEAD
=======
=======
export interface User {;
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

}

  try {;
    const user = parseUserFromRequest(req);


    ensureAdmin(user);

<<<<<<< HEAD
=======
=======
export function parseUserFromRequest (req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic;
  const auth_header = req.headers.authorization;
  // Check condition
if ( {) {
  $2
}
    return { id: 'guest', email: 'guest@example.com', role: 'guest' }
  }
  // Simple mock for admin users;
  if () {) {
  $2
}
    return { id: 'admin - 1', email: 'admin@zion.os', role: 'admin' }
  }
  return { id: 'user - 1', email: 'user@zion.os', role: 'user' }
}
export function ensure_admin (user: User): void {
  // Check condition
if ( {) {
  $2
}
    const error = new Error ('Forbidden');
    (error as any).status_code = 403;
    throw error;
  }
}
export async function ensureAdminFromApi (req: NextApiRequest): Promise<{ allowed: boolean }> {
  try {
    const user = parseUserFromRequest (req);
    ensure_admin (user);
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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
<<<<<<< HEAD

const demoUsers: DemoUser[] = [];
export function ensureDemoUsers(): void {
  if (demoUsers.length === 0) {
    demoUsers.push(


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======


      { id: 'admin-1', name: 'Admin User', role: 'admin', email: 'admin@zion.os' },
      { id: 'user-1', name: 'Regular User', role: 'user', email: 'user@zion.os' };


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
    );
  }
}
export function generateUser(name: string, role: 'admin' | 'user' | 'guest'): DemoUser {
  return {
<<<<<<< HEAD

    id: `user-${Date.now()}`
    name
    role
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@zion.os`
  }
}
export function upsertUser(user: DemoUser): void {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


    id: `user-${Date.now()}`,
    name,
    role,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@zion.os`;
  };
}

export function upsertUser(user: DemoUser): void {;


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const index = demoUsers.findIndex(u => u.id === user.id);
  if (index >= 0) {
    demoUsers[index] = user;
  } else {
    demoUsers.push(user);
  }
}
<<<<<<< HEAD

export function setUserCookie(res: NextApiResponse, user: DemoUser): void {
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
}
export function getUserFromRequest(req: NextApiRequest): DemoUser | null {
  const cookieHeader = req.headers.cookie |'';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



export function setUserCookie(res: NextApiResponse, user: DemoUser): void {;
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
}

export function getUserFromRequest(req: NextApiRequest): DemoUser | null {;
  const cookieHeader = req.headers.cookie || '';


<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;
=======
  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;
=======
const demo_users: DemoUser[] = [];
;
export function ensureDemoUsers (): void {
  // Check condition
if ( {) {
  $2
}
    demo_users.push (
      { id: 'admin - 1', name: 'Admin User', role: 'admin', email: 'admin@zion.os' },
      { id: 'user - 1', name: 'Regular User', role: 'user', email: 'user@zion.os' }
    );
  }
}
export function generate_user (name: string, role: 'admin' | 'user' | 'guest'): DemoUser {
  return {
    id: `user-${Date.now ()}`,
    name,
    role,
    email: `${name.toLowerCase ().replace (/\s+/g, '.')}@zion.os`;
  }
}
export function upsert_user (user: DemoUser): void {
  const index = demo_users.find_index (u => u.id === user.id);
  // Check condition
if ( {) {
  $2
}
    demo_users[index] = user;
  } else {
    demo_users.push (user);
  }
}
export function setUserCookie (res: NextApiResponse, user: DemoUser): void {
  res.set_header ('Set - Cookie', `user=${JSON.stringify (user)} Path=/; HttpOnly`);
}
export function getUserFromRequest (req: NextApiRequest): DemoUser | null {
  const cookie_header = req.headers.cookie || '';
  const match = cookie_header.match (/user=([^;]+)/);
  // Check condition
if (return null) {
  $2
}
  try {
    return JSON.parse (decodeURIComponent (match[1]));
  } catch {
    return null;
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4



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

<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
