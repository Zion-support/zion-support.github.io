import type { NextApiRequest } from 'next';
export interface Session {
  userId: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}
export function getSessionFromReq(req: NextApiRequest): Session | null {
  // Mock implementation - replace with actual session logic
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
  // Check for internal agent headers or IPs
  const userAgent = req.headers['user-agent'] |'';
  const internalAgents = ['zion-bot', 'internal-agent', 'automation'];
  return internalAgents.some(agent => userAgent.toLowerCase().includes(agent));
}
<<<<<<< HEAD

export const isAdmin = () => {
  // Placeholder implementation
  return true;
};
=======
export const isAdmin = () => {
  // Placeholder implementation
  return true;
}
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
