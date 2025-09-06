import type { NextApiRequest } from 'next';

export interface Session {
  user: {
    id: string;
    email: string;
    role: string;
  };
}

export function getSessionFromReq(req: NextApiRequest): Session | null {
  // Mock implementation - in production, you'd verify JWT tokens, check cookies, etc.
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return {
      user: {
        id: 'user-1',
        email: 'user@example.com',
        role: 'user'
      }
    };
  }
  return null;
}

export function isInternalAgentRequest(req: NextApiRequest): boolean {
  // Check for internal agent headers or tokens
  const userAgent = req.headers['user-agent'] || '';
  const internalToken = req.headers['x-internal-token'];
  
  return userAgent.includes('internal-agent') || 
         internalToken === process.env.INTERNAL_AGENT_TOKEN;
}