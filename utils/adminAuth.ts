import type { NextApiRequest } from 'next';

export interface AdminSession {
  isAdmin: boolean;
  userId?: string;
  email?: string;
}

export function getSessionFromReq(req: NextApiRequest): AdminSession | null {
  // For now, return a mock admin session in development
  if (process.env.NODE_ENV === 'development') {
    return { 
      isAdmin: true, 
      userId: 'dev-user', 
      email: 'dev@ziontechgroup.com' 
    };
  }

  // TODO: Implement proper session management
  // This could check for JWT tokens, session cookies, etc.
  return null;
}

export function isInternalAgentRequest(req: NextApiRequest): boolean {
  // Check for internal agent headers or other indicators
  const userAgent = req.headers['user-agent'] || '';
  const internalAgents = ['zion-automation', 'zion-cron', 'zion-bot'];
  
  return internalAgents.some(agent => userAgent.includes(agent));
}