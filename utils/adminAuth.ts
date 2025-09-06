
import type { NextApiRequest } from 'next';

  email: string;
  role: 'admin' | 'user' | 'guest';
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}

export function getSessionFromReq(req: NextApiRequest): Session | null {
  // Mock implementation - replace with actual session logic;
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return null;
  }
  // Simple mock for admin users
  if (authHeader.includes('admin')) {
    return { userId: 'admin-1', email: 'admin@zion.os', role: 'admin' }
  }
  return { userId: 'user-1', email: 'user@zion.os', role: 'user' }
}
export function isInternalAgentRequest(req: NextApiRequest): boolean {


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  const internalAgents = ['zion-bot', 'internal-agent', 'automation'];
  return internalAgents.some(agent => userAgent.toLowerCase().includes(agent));
}



};




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

