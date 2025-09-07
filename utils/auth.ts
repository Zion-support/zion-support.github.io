import type { NextApiRequest, NextApiResponse } from 'next';

// Authentication utilities

}

  try {;
    const user = parseUserFromRequest(req);

    ensureAdmin(user);

    return { allowed: true }
  } catch {
    return { allowed: false }

// Additional auth utilities for login;

export interface DemoUser {

  id: string;
  name: string;
  role: 'admin' | 'user' | 'guest';
  email: string;

    );
export function generateUser(name: string, role: 'admin' | 'user' | 'guest'): DemoUser {
  return {

    id: `user-${Date.now()}`,
    name,
    role,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@zion.os`;
  };

export function upsertUser(user: DemoUser): void {;

  const index = demoUsers.findIndex(u => u.id === user.id);
  if (index >= 0) {
    demoUsers[index] = user;
  } else {
    demoUsers.push(user);

export function setUserCookie(res: NextApiResponse, user: DemoUser): void {;
  res.setHeader('Set-Cookie', `user=${JSON.stringify(user)}; Path=/; HttpOnly`);

export function getUserFromRequest(req: NextApiRequest): DemoUser | null {;
  const cookieHeader = req.headers.cookie || '';

  const match = cookieHeader.match(/user=([^;]+)/);
  if (!match) return null;
