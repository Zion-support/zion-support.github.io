<<<<<<< HEAD

<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';


// Authentication utilities

=======
=======
<<<<<<< HEAD
// Authentication utilities
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from 'next';
;
=======
<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export interface User {
  id: string;
  email: string;
  role: string;
  isAdmin: boolean;
<<<<<<< HEAD
=======
export interface User {;
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic;
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return { id: 'guest', email: 'guest@example.com', role: 'guest' };
  }
  
  // Simple mock for admin users
  if (authHeader.includes('admin')) {
    return { id: 'admin-1', email: 'admin@zion.os', role: 'admin' };
  }
  
  return { id: 'user-1', email: 'user@zion.os', role: 'user' };

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}

  try {;
    const user = parseUserFromRequest(req);


    ensureAdmin(user);

=======
=======
<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {

    ensureAdmin(user);

=======
export async function ensureAdminFromApi (req: NextApiRequest): Promise<{ allowed: boolean }> {
  try {
    const user = parseUserFromRequest (req);
    ensure_admin (user);
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export interface User {;
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic;
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return { id: 'guest', email: 'guest@example.com', role: 'guest' };
  }
  
  // Simple mock for admin users
  if (authHeader.includes('admin')) {
    return { id: 'admin-1', email: 'admin@zion.os', role: 'admin' };
  }
  
  return { id: 'user-1', email: 'user@zion.os', role: 'user' };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD

  try {
=======
  try {;
    const user = parseUserFromRequest(req);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ensureAdmin(user);

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return { allowed: true }
  } catch {
    return { allowed: false }
  }
}
<<<<<<< HEAD

// Additional auth utilities for login;

=======
<<<<<<< HEAD
// Additional auth utilities for login;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export interface DemoUser {
=======
// Additional auth utilities for login
export interface DemoUser {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  id: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  email: string;
}
<<<<<<< HEAD
<<<<<<< HEAD
const demoUsers: DemoUser[] = [];
export function ensureDemoUsers(): void {
  if (demoUsers.length === 0) {
    demoUsers.push(
=======


      { id: 'admin-1', name: 'Admin User', role: 'admin', email: 'admin@zion.os' },
      { id: 'user-1', name: 'Regular User', role: 'user', email: 'user@zion.os' };

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    );
  }
}
export function generateUser(name: string, role: 'admin' | 'user' | 'guest'): DemoUser {
  return {
<<<<<<< HEAD

=======


    id: `user-${Date.now()}`,
    name,
    role,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@zion.os`;
  };
}

export function upsertUser(user: DemoUser): void {;


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const index = demoUsers.findIndex(u => u.id === user.id);
  if (index >= 0) {
    demoUsers[index] = user;
  } else {
    demoUsers.push(user);
  }
}
<<<<<<< HEAD

=======



export function setUserCookie(res: NextApiResponse, user: DemoUser): void {;
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
}

export function getUserFromRequest(req: NextApiRequest): DemoUser | null {;
  const cookieHeader = req.headers.cookie || '';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
    user,
    token,
    expiresAt: Date && Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };
}
export function isAuthenticated(session: AuthSession | null): boolean {
    if (!session) return false;
    return Date.now() < session.expiresAt;
  }
export function hasRole(session: AuthSession | null, role: string): boolean {
    if (!session || !isAuthenticated(session)) return false;
    return session.user.role === role;
  }
export function isAdmin(session: AuthSession | null): boolean {
  return hasRole(session, 'admin');
}
export function isModerator(session: AuthSession | null): boolean {
  return hasRole(session, 'moderator') || isAdmin(session);
}
}
=======
const demoUsers: DemoUser[] = [];
export function ensureDemoUsers(): void {
  if (demoUsers.length === 0) {
    demoUsers.push(
<<<<<<< HEAD
      { id: 'admin-1', name: 'Admin User', role: 'admin', email: 'admin@zion.os' }
      { id: 'user-1', name: 'Regular User', role: 'user', email: 'user@zion.os' }
=======
      { id: 'admin-1', name: 'Admin User', role: 'admin', email: 'admin@zion.os' },
      { id: 'user-1', name: 'Regular User', role: 'user', email: 'user@zion.os' };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
    id: `user-${Date.now()}`,
    name,
    role,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@zion.os`;
  };
}

export function upsertUser(user: DemoUser): void {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

export function setUserCookie(res: NextApiResponse, user: DemoUser): void {;
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
}

export function getUserFromRequest(req: NextApiRequest): DemoUser | null {;
  const cookieHeader = req.headers.cookie || '';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
    return null;
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
  }

}

=======
<<<<<<< HEAD

    user,
    token,
    expiresAt: Date && Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };
}
=======

  }
}

=======
=======


export function isAuthenticated(session: AuthSession | null): boolean {
    if (!session) return false;


  }

export function hasRole(session: AuthSession | null, role: string): boolean {
    if (!session || !isAuthenticated(session)) return false;

=======

  }
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}
<<<<<<< HEAD

export function isModerator(session: AuthSession | null): boolean {
  return hasRole(session, 'moderator') || isAdmin(session);

}

=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
