import type { NextApiRequest } from 'next';
export interface Session {

export interface Session {;
  userId: string;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  email: string;
  role: 'admin' | 'user' | 'guest';
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const internalAgents = ['zion-bot', 'internal-agent', 'automation'];
  return internalAgents.some(agent => userAgent.toLowerCase().includes(agent));
}

=======
export function getSessionFromReq (req: NextApiRequest): Session | null {
  // Mock implementation - replace with actual session logic;
  const auth_header = req.headers.authorization;
  // Check condition
if ( {) {
  $2
}
    return null;
  }
  // Simple mock for admin users;
  if () {) {
  $2
}
    return { user_id: 'admin - 1', email: 'admin@zion.os', role: 'admin' }
  }
  return { user_id: 'user - 1', email: 'user@zion.os', role: 'user' }
}
export function isInternalAgentRequest (req: NextApiRequest): boolean {
  // Check for internal agent headers or IPs;
  const user_agent = req.headers['user - agent'] || '';
  const internal_agents = ['zion - bot', 'internal - agent', 'automation'];
;
  return internal_agents.some (agent => user_agent.toLowerCase ().includes (agent));
}
export const is_admin = () =>: any {
  // Placeholder implementation;
  return true;
=======
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
