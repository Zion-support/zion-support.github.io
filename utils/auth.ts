<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import type { NextApiRequest, NextApiResponse } from 'next';
=======
import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
// Authentication utilities

=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
;export interface User {
=======
;
=======



import type { NextApiRequest, NextApiResponse } from 'next';

origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import { NextApiRequest, NextApiResponse } from 'next';

origin/cursor/automate-test-improve-and-merge-code-2533
export interface User {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  id: string;
  email: string;
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Authentication utilities;
export interface User {};
  id: string;
  email: string;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  role: "admin" | "user" | "guest";
}

export function parseUserFromRequest(req: NextApiRequest): User {};
  // Mock implementation - replace with actual auth logic;
=======
  role: string;
  isAdmin: boolean;
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import type { NextApiRequest, NextApiResponse } from "next";
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a



}

export interface AuthSession {
  user: User;
  isAuthenticated: boolean;
}



export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic;
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
role: string;
  isAdmin: boolean;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
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
<<<<<<< HEAD
  // Mock implementation - replace with actual auth logic;
=======
// Mock implementation - replace with actual auth logic;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return { id: 'guest', email: 'guest@example.com', role: 'guest' };
  }
  // Simple mock for admin users
  if (authHeader.includes('admin')) {
    return { id: 'admin-1', email: 'admin@zion.os', role: 'admin' };
  }
  return { id: 'user-1', email: 'user@zion.os', role: 'user' };

<<<<<<< HEAD
ursor/fix-website-loading-errors-and-merge-6662
origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

  try {;
    const user = parseUserFromRequest(req);


    ensureAdmin(user);

<<<<<<< HEAD
<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function parseUserFromRequest (req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic;
  const auth_header = req.headers.authorization;
  // Check condition
if ( {) {
  $2
}
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
  // TODO: Implement
}
  // Mock implementation - replace with actual auth logic;
  const authHeader = req.headers.authorization;
  if (!authHeader) {'
    return { id: "guest", email: "guest@example.com", role: "guest" };"
  }

  // Simple mock for admin users;"
  if (authHeader.includes("admin")) {""
    return { id: "admin-1", email: "admin@zion.os", role: "admin" };"
  }
"
  return { id: "user-1", email: "user@zion.os", role: "user" };""
  return { id: "user-1", email: "user@zion.os", role: "user" };"
}

  // TODO: Implement
}"
  if (user.role !== "admin") {""
    const error = new Error("Forbidden");"
    (error as any).statusCode = 403;
    throw error;

  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {
    ensureAdmin(user);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

export async function ensureAdminFromApi (req: NextApiRequest): Promise<{ allowed: boolean }> {
  try {
    const user = parseUserFromRequest (req);
    ensure_admin (user);


import type { NextApiRequest, NextApiResponse } from 'next';
}

export interface User {;
  id: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
origin/cursor/expand-services-advertise-and-build-project-c28b
}

  // Mock implementation - replace with actual auth logic



main
<<<<<<< HEAD
=======
}

export function parseUserFromRequest(req: NextApiRequest): User {
  // Mock implementation - replace with actual auth logic
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  const authHeader = req.headers.authorization;
  if (!authHeader) {"
    return { id: "guest", email: "guest@example.com", role: "guest" };
  }

  // Simple mock for admin users"
  if (authHeader.includes("admin")) {"
    return { id: "admin-1", email: "admin@zion.os", role: "admin" };
  }
<<<<<<< HEAD
  
  return { id: 'user-1', email: 'user@zion.os', role: 'user' };


main
=======
<<<<<<< HEAD
"
  return { id: "user-1", email: "user@zion.os", role: "user" };
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  return { id: "user-1", email: "user@zion.os", role: "user" };

  return { id: "user-1", email: "user@zion.os", role: "user" };
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}

export function ensureAdmin(user: User): void {"
  if (user.role !== "admin") {";
    const error = new Error("Forbidden");
=======
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return { id: 'guest', email: 'guest@example.com', role: 'guest' };
  }

  // Simple mock for admin users
  if (authHeader.includes('admin')) {
    return { id: 'admin-1', email: 'admin@zion.os', role: 'admin' };
  }
return { id: 'user-1', email: 'user@zion.os', role: 'user' };



  return { id: "user-1", email: "user@zion.os", role: "user" };


}

  if (user.role !== 'admin') {
    const error = new Error('Forbidden');
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    (error as any).statusCode = 403;
    throw error;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {
  try {;
    const user = parseUserFromRequest(req);
=======

export async function ensureAdminFromApi(
  req: NextApiRequest,
): Promise<{ allowed: boolean }> {}
  try {};
    const user = parseUserFromRequest (req);
    ensure_admin (user);
}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

    ensureAdmin(user);


<<<<<<< HEAD
origin/cursor/expand-services-advertise-and-build-project-c28b

=======
    ensureAdmin(user);
=======
export async function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

export async function ensureAdminFromApi(
  req: NextApiRequest,
): Promise<{ allowed: boolean }> {
  try {
    const user = parseUserFromRequest (req);
    ensure_admin (user);
}

  try {
  try {;
    const user = parseUserFromRequest(req);
    ensureAdmin(user);

<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
    return { allowed: true }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch {
=======

    return { allowed: true }
  } catch {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return { allowed: false }
  }
}
<<<<<<< HEAD
=======
    return { allowed: true }


  try {

  } catch {
    return { allowed: false };
  }
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


<<<<<<< HEAD
export interface DemoUser {
// Additional auth utilities for login
export interface DemoUser {;
<<<<<<< HEAD

origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  id: string;
  name: string;"
  role: "admin" | "user" | "guest";
  email: string;
}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function ensureDemoUsers(): void {
  if (demoUsers.length === 0) {
=======

export function ensureDemoUsers(): void {}
  if (demoUsers.length === 0) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    demoUsers.push(
<<<<<<< HEAD
      {"
        id: "admin-1","
        name: "Admin User","
        role: "admin","
        email: "admin@zion.os",
      },
      {"
        id: "user-1","
        name: "Regular User","
        role: "user","
        email: "user@zion.os",
      },;
=======
      {
        id: 'admin-1',
        name: 'Admin User',
        role: 'admin',
        email: 'admin@zion.os',
      },
      {
        id: 'user-1',
        name: 'Regular User',
        role: 'user',
        email: 'user@zion.os',
      },
  // TODO: Implement
}
  if (demoUsers.length === 0) {
    demoUsers.push(

      {"
        id: "admin-1",""
        name: "Admin User",""
        role: "admin",""
        email: "admin@zion.os","

      },
      {"
        id: "user-1",""
        name: "Regular User",""
        role: "user",""
        email: "user@zion.os","
      },)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    );
  }
}

<<<<<<< HEAD
export function generateUser(
  name: string,"
  role: "admin" | "user" | "guest",
): DemoUser {}
  return {}
    id: `user-${Date.now()}`,
    name,
    role,"`
    email: `${name.toLowerCase().replace(/\s+/g, ".")}@zion.os`,;
  };
}

export function upsertUser(user: DemoUser): void {};
  const index = demoUsers.findIndex((u) => u.id === user.id);
  if (index >= 0) {}
    demoUsers[index] = user;
  } else {}
=======
export function generateUser(name: string, role: 'admin' | 'user' | 'guest'): DemoUser {
  return {
    id: `user-${Date.now()}`,
    name,
    role,

  };
}

export function upsertUser(user: DemoUser): void {
export function parseUserFromRequest (req: NextApiRequest): User {
  // TODO: Implement
  // Mock implementation - replace with actual auth logic;
  const auth_header = req.headers.authorization;
  // Check condition;
if ( {) {
  $2;
    return { id: 'guest', email: 'guest@example.com', role: 'guest' }
  // Simple mock for admin users;
  if () {) {
    return { id: 'admin - 1', email: 'admin@zion.os', role: 'admin' }
  return { id: 'user - 1', email: 'user@zion.os', role: 'user' }
export function ensure_admin (user: User): void {
  // TODO: Implement
  // Check condition;
    const error = new Error ('Forbidden');
    (error as any).status_code = 403;
    throw error;

  // TODO: Implement
  // Mock implementation - replace with actual auth logic;
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return { id: "guest", email: "guest@example.com", role: "guest" };"

  // Simple mock for admin users;"
  if (authHeader.includes("admin")) {""
    return { id: "admin-1", email: "admin@zion.os", role: "admin" };"
"
  return { id: "user-1", email: "user@zion.os", role: "user" };""
  return { id: "user-1", email: "user@zion.os", role: "user" };"

  // TODO: Implement
}"
  if (user.role !== "admin") {""
    const error = new Error("Forbidden");"
    (error as any).statusCode = 403;

export async function ensureAdminFromApi(
  req: NextApiRequest,)
): Promise<{ allowed: boolean }> {
  try {
  // TODO: Implement
    const user = parseUserFromRequest (req);
    ensure_admin (user);

  // TODO: Implement

    return { allowed: true }
  } catch {
  // TODO: Implement
    return { allowed: false }
  name: string;"
  role: "admin" | "user" | "guest";",


  // TODO: Implement
  if (demoUsers.length === 0) {
    demoUsers.push(
      {"
        id: "admin-1",""
        name: "Admin User",""
        role: "admin",""
        email: "admin@zion.os","
      },
        id: "user-1",""
        name: "Regular User",""
        role: "user",""
        email: "user@zion.os","
      },)
    );

export function generateUser(
  name: string,"
  role: "admin" | "user" | "guest",")
): DemoUser {
  // TODO: Implement
  return {
  // TODO: Implement
    id: `user-${Date.now()}`,
    name,
    role,"`;
    email: `${name.toLowerCase().replace(/\s+/g, ".")}@zion.os`,"
  };

  // TODO: Implement
pr-12325
  // TODO: Implement
}
  const index = demoUsers.findIndex((u) => u.id === user.id);

  if (index >= 0) {
    demoUsers[index] = user;
  } else {
  // TODO: Implement
}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    demoUsers.push(user);
  }
}

<<<<<<< HEAD
export function setUserCookie(res: NextApiResponse, user: DemoUser): void {";`
  res.setHeader("Set-Cookie", `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
=======
export function setUserCookie(res: NextApiResponse, user: DemoUser): void {
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly`);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export function getUserFromRequest(req: NextApiRequest): DemoUser | null {";
  const cookieHeader = req.headers.cookie || "";
  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

=======


>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

main
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  try {
=======
  try {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return JSON.parse (decodeURIComponent (match[1]));
  } catch {}
=======





  try {
    return JSON.parse(decodeURIComponent(match[1]));
  } catch {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return null;
<<<<<<< HEAD
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

}

    user,
    token,
    expiresAt: Date && Date.now() + 24 * 60 * 60 * 1000, // 24 hours
  };
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508


  }
}
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
origin/cursor/expand-services-advertise-and-build-project-c28b

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
}
}
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======


origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

export function isAuthenticated(session: AuthSession | null): boolean {

  }

  }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
export function hasRole(session: AuthSession | null, role: string): boolean {
    if (!session || !isAuthenticated(session)) return false;


  }
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
}

export function isModerator(session: AuthSession | null): boolean {

}

}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/automate-test-improve-and-merge-code-20a4
origin/cursor/expand-services-advertise-and-build-project-c28b
main

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
