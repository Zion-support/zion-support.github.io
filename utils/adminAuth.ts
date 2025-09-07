import type { NextApiRequest } from 'next';

export interface Session {
  userId: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export function getSessionFromReq(req: NextApiRequest): Session | null {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  if (authHeader.includes('admin')) {
    return { userId: 'admin-1', email: 'admin@zion.os', role: 'admin' };
  }
  return { userId: 'user-1', email: 'user@zion.os', role: 'user' };
}

export function isInternalAgentRequest(req: NextApiRequest): boolean {
  const userAgent = (req.headers['user-agent'] as string) || '';
  const internalAgents = ['zion-bot', 'internal-agent', 'automation'];
  return internalAgents.some((agent) => userAgent.toLowerCase().includes(agent));
}

export const isAdmin = (session: Session | null | undefined): boolean => {
  return !!session && session.role === 'admin';
};
