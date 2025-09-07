export interface Session {
  userId: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
  isAdmin: boolean;
  createdAt: number;
  expiresAt: number;
}

export function createAdminSession(userId: string, email: string): Session {
  const now = Date.now();
  return {
    userId,
    email,
    role: 'admin',
    isAdmin: true,
    createdAt: now,
    expiresAt: now + (24 * 60 * 60 * 1000) // 24 hours
  };
}

export function isAdminSession(session: Session): boolean {
  return session.isAdmin && session.expiresAt > Date.now();
}

export function validateAdminToken(token: string): Session | null {
  // Placeholder for admin token validation
  // In production, this would validate against a secure token store
  return null;
}

export function getSessionFromReq(req: any): Session | null {
  // Placeholder for getting session from request
  return null;
}

export function isInternalAgentRequest(req: any): boolean {
  // Placeholder for internal agent request check
  return false;
}