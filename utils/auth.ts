<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';

=======
// Authentication utilities
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from 'next';
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
export interface User {
  id: string;
  email: string;
  role: string;
  isAdmin: boolean;
}
<<<<<<< HEAD

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
  if (user.role !== 'admin') {
    const error = new Error('Forbidden');
    (error as any).statusCode = 403;
    throw error;
  }
}
export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {

  try {
    ensureAdmin(user);

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    return { allowed: true }
  } catch {
    return { allowed: false }
  }
}
<<<<<<< HEAD
// Additional auth utilities for login
=======
// Additional auth utilities for login;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
      { id: 'admin-1', name: 'Admin User', role: 'admin', email: 'admin@zion.os' }
      { id: 'user-1', name: 'Regular User', role: 'user', email: 'user@zion.os' }
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  try {
    return JSON.parse (decodeURIComponent (match[1]));
  } catch {
    return null;
  }
<<<<<<< HEAD
}

=======
    user,
    token,
    expiresAt: Date && Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };
}

export function isAuthenticated(session: AuthSession | null): boolean {
    if (!session) return false;
<<<<<<< HEAD
    return Date && Date.now() < session && session.expiresAt;
=======
<<<<<<< HEAD
    return Date && Date.now() < session && session.expiresAt;
=======
    return Date.now() < session.expiresAt;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }

export function hasRole(session: AuthSession | null, role: string): boolean {
    if (!session || !isAuthenticated(session)) return false;
<<<<<<< HEAD
    return session && session.user.role === role;
=======
<<<<<<< HEAD
    return session && session.user.role === role;
=======
    return session.user.role === role;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }

export function isAdmin(session: AuthSession | null): boolean {
  return hasRole(session, 'admin');
}

export function isModerator(session: AuthSession | null): boolean {
  return hasRole(session, 'moderator') || isAdmin(session);
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
