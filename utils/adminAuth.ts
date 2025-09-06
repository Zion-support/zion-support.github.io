import type { NextApiRequest } from 'next';

export function getSessionFromReq(req: NextApiRequest): any {
  // Mock implementation - in a real app, this would parse JWT or session
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  
  return {
    user: {
      id: '1',
      email: 'admin@example.com',
      role: 'admin'
    }
  };
}

export function isInternalAgentRequest(req: NextApiRequest): boolean {
  // Mock implementation - in a real app, this would check for internal agent tokens
  const userAgent = req.headers['user-agent'] || '';
  return userAgent.includes('internal-agent');
}