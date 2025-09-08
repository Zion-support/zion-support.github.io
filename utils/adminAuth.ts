import type { NextApiRequest } from 'next';

export interface Session {
  user: {
    id: string;
    email: string;
    role: string;
  };
}

export function getSessionFromReq(req: NextApiRequest): Session | null {
  // Mock implementation - in production, this would parse JWT or session
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return {
      user: {
        id: '1',
        email: 'admin@zion.os',
        role: 'admin'
      }
    };
  }
  return null;
}

export function isInternalAgentRequest(req: NextApiRequest): boolean {
  const userAgent = req.headers['user-agent'] || '';
  return userAgent.includes('internal-agent') || userAgent.includes('bot');
}