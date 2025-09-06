/**
 * Authentication utilities
 */

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: string;
  updatedAt: string;
}

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: number;
}

export function isAuthenticated(session: AuthSession | null): boolean {
  if (!session) return false;
  return Date.now() < session.expiresAt;
}

export function hasRole(session: AuthSession | null, role: string): boolean {
  if (!session) return false;
  return session.user.role === role;
}

export function isAdmin(session: AuthSession | null): boolean {
  return hasRole(session, 'admin');
}

export function isModerator(session: AuthSession | null): boolean {
  return hasRole(session, 'moderator') || isAdmin(session);
}

export function requireAuth(session: AuthSession | null): User {
  if (!isAuthenticated(session)) {
    throw new Error('Authentication required');
  }
  return session!.user;
}

export function requireRole(session: AuthSession | null, role: string): User {
  const user = requireAuth(session);
  if (!hasRole(session, role)) {
    throw new Error(`Role '${role}' required`);
  }
  return user;
}

export function requireAdmin(session: AuthSession | null): User {
  return requireRole(session, 'admin');
}

export function requireModerator(session: AuthSession | null): User {
  const user = requireAuth(session);
  if (!isModerator(session)) {
    throw new Error('Moderator or admin role required');
  }
  return user;
}