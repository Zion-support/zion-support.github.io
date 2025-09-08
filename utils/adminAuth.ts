import type { NextApiRequest } from 'next';

export interface Session {
  user: {
    id: string;
    email: string;
    role: string;
  };
}

export function getSessionFromReq(req: NextApiRequest): Session | null {
  // Mock session for now
  // In a real implementation, this would parse JWT tokens or session cookies
  return {
    user: {
      id: 'admin-1',
      email: 'admin@ziontechgroup.com',
      role: 'admin'
    }
  };
}

export function isInternalAgentRequest(req: NextApiRequest): boolean {
  const userAgent = req.headers['user-agent'] || '';
  return userAgent.includes('internal-agent') || userAgent.includes('bot');
}