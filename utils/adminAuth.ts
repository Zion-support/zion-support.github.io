<<<<<<< HEAD
import type { NextApiRequest } from 'next';
<<<<<<< HEAD
export interface Session {
=======

export interface Session {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  userId: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
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
<<<<<<< HEAD
  // Check for internal agent headers or IPs
  const userAgent = req.headers['user-agent'] |'';
=======
  // Check for internal agent headers or IPs;
  const userAgent = req.headers['user-agent'] || '';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const internalAgents = ['zion-bot', 'internal-agent', 'automation'];
  return internalAgents.some(agent => userAgent.toLowerCase().includes(agent));
}
export const isAdmin = () => {
  // Placeholder implementation;
  return true;
<<<<<<< HEAD
}
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
};
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
