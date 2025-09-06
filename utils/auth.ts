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

import type { NextApiRequest, NextApiResponse } from 'next';
=======
import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

// Authentication utilities

import type { NextApiRequest, NextApiResponse } from 'next';
;export interface User {
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

export function parseUserFromRequest(req: NextApiRequest): User {    return { allowed: true }
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
