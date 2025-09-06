<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest } from 'next';
export function getRequestUserEmail(req: NextApiRequest): string | null {;
  const emailHeader = req.headers['x-user-email'];
  if (Array.isArray(emailHeader)) return emailHeader[0] || null;
  return (emailHeader as string) || null;
}
;
export function isAdminEmail(email: string | null | undefined): boolean {;
  if (!email) return false;
  const admins = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean);
  return admins.includes(email.toLowerCase());
}
=======
=======
import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

import type { NextApiRequest, NextApiResponse } from 'next';
=======
import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

// Authentication utilities

import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
;export interface User {
=======
;
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
;
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
;
=======
<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
import { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
export interface User {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  id: string;
  email: string;
  role: "admin" | "user" | "guest";
}

export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic;
export interface User {;
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

<<<<<<< HEAD
export function parseUserFromRequest(req: NextApiRequest): User {    return { allowed: true }
=======
export function parseUserFromRequest(req: NextApiRequest): User {
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}

  try {;
    const user = parseUserFromRequest(req);


    ensureAdmin(user);

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
}

export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return { id: 'guest', email: 'guest@example.com', role: 'guest' };
  }
  
  // Simple mock for admin users
  if (authHeader.includes('admin')) {
    return { id: 'admin-1', email: 'admin@zion.os', role: 'admin' };
  }
  
  return { id: 'user-1', email: 'user@zion.os', role: 'user' };
}

  try {;
    const user = parseUserFromRequest(req);


    ensureAdmin(user);

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
    ensureAdmin(user);

=======
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export async function ensureAdminFromApi (req: NextApiRequest): Promise<{ allowed: boolean }> {
  try {
    const user = parseUserFromRequest (req);
    ensure_admin (user);
<<<<<<< HEAD
}
=======
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';

export interface User {;
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}

export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return { id: "guest", email: "guest@example.com", role: "guest" };
  }

  // Simple mock for admin users
  if (authHeader.includes("admin")) {
    return { id: "admin-1", email: "admin@zion.os", role: "admin" };
  }
<<<<<<< HEAD

  return { id: "user-1", email: "user@zion.os", role: "user" };
=======
<<<<<<< HEAD

  return { id: "user-1", email: "user@zion.os", role: "user" };
=======
  
  return { id: 'user-1', email: 'user@zion.os', role: 'user' };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
}

export function ensureAdmin(user: User): void {
  if (user.role !== "admin") {
    const error = new Error("Forbidden");
    (error as any).statusCode = 403;
    throw error;
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {
<<<<<<< HEAD
    ensureAdmin(user);
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main

export async function ensureAdminFromApi(
  req: NextApiRequest,
): Promise<{ allowed: boolean }> {
  try {
    const user = parseUserFromRequest (req);
    ensure_admin (user);
}
=======
<<<<<<< HEAD

  try {
=======
  try {;
    const user = parseUserFromRequest(req);
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ensureAdmin(user);

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    return { allowed: true }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch {
    return { allowed: false }
  }
}
  id: string;
  name: string;
  role: "admin" | "user" | "guest";
  email: string;
}

export function ensureDemoUsers(): void {
  if (demoUsers.length === 0) {
    demoUsers.push(
      {
        id: "admin-1",
        name: "Admin User",
        role: "admin",
        email: "admin@zion.os",
      },
      {
        id: "user-1",
        name: "Regular User",
        role: "user",
        email: "user@zion.os",
      },
    );
  }
}

export function generateUser(
  name: string,
  role: "admin" | "user" | "guest",
): DemoUser {
  return {
    id: `user-${Date.now()}`,
    name,
    role,
    email: `${name.toLowerCase().replace(/\s+/g, ".")}@zion.os`,
  };
}

export function upsertUser(user: DemoUser): void {
  const index = demoUsers.findIndex((u) => u.id === user.id);
  if (index >= 0) {
    demoUsers[index] = user;
  } else {
    demoUsers.push(user);
  }
}

export function setUserCookie(res: NextApiResponse, user: DemoUser): void {
  res.setHeader("Set-Cookie", `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
}

export function getUserFromRequest(req: NextApiRequest): DemoUser | null {
  const cookieHeader = req.headers.cookie || "";
  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;
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
<<<<<<< HEAD
  }
<<<<<<< HEAD
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
}
=======
<<<<<<< HEAD
=======


    user,
    token,
    expiresAt: Date && Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

  }
}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


export function isAuthenticated(session: AuthSession | null): boolean {
    if (!session) return false;

  }

  }

<<<<<<< HEAD
=======
export function hasRole(session: AuthSession | null, role: string): boolean {
    if (!session || !isAuthenticated(session)) return false;


  }
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
}

export function isModerator(session: AuthSession | null): boolean {
  return hasRole(session, 'moderator') || isAdmin(session);

}

=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======

export class AuthError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 401) {
    super(message);
    this.name = 'AuthError';
    this.statusCode = statusCode;
  }
}

export function parseUserFromRequest(req: NextApiRequest): User | null {
  // Mock implementation: In a real app, this would parse a JWT or session cookie
  // For now, let's assume an admin user if a specific header is present for testing
  if (req.headers['x-admin-secret'] === process.env.ADMIN_SECRET) {
    return { id: 'admin-user', email: 'admin@example.com', role: 'admin', isAdmin: true };
  }
  // For other users, return a non-admin user or null
  return { id: 'test-user', email: 'user@example.com', role: 'user', isAdmin: false };
}

export function ensureAdmin(user: User | null): asserts user is User & { isAdmin: true } {
  if (!user || !user.isAdmin) {
    throw new AuthError('Forbidden: Admin access required', 403);
  }
}

export async function ensureAdminFromApi(req: NextApiRequest, res: NextApiResponse): Promise<{ allowed: boolean }> {
  const user = parseUserFromRequest(req);
  try {
    ensureAdmin(user);
    return { allowed: true };
  } catch (e: any) {
    res.status(e.statusCode || 403).json({ error: 'Forbidden' });
    return { allowed: false };
  }
}

export function getSessionFromReq(req: NextApiRequest): any {
  // Mock implementation
  return null;
}

export function isInternalAgentRequest(req: NextApiRequest): boolean {
  // Mock implementation
  return false;
}

export function clearUserCookie(res: NextApiResponse) {
  // Mock implementation
  res.setHeader('Set-Cookie', 'user=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT');
}

export function getUserFromRequest(req: NextApiRequest): User | null {
  return parseUserFromRequest(req);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
