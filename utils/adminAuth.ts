import type { NextApiRequest } from 'next';

export function getSessionFromReq(req: NextApiRequest): any {
  // Mock implementation - in a real app, this would parse JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  
  // Mock session for development
  return {
    user: {
      id: 'admin-1',
      email: 'admin@ziontechgroup.com',
      role: 'admin'
    }
  };
}

export function isInternalAgentRequest(req: NextApiRequest): boolean {
  // Mock implementation - in a real app, this would check for internal agent headers
  const userAgent = req.headers['user-agent'] || '';
  return userAgent.includes('internal-agent') || userAgent.includes('zion-bot');
}