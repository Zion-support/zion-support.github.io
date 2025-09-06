// Note: This is a Vite project, not Next.js
// Using a generic request type instead of NextApiRequest
type ApiRequest = {
  headers: Record<string, string | string[] | undefined>;
  [key: string]: any;
};

export interface Session {
  userId: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export function getSessionFromReq(req: ApiRequest): Session | null {
  // Mock implementation - replace with actual session logic
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return null;
  }
  
  // Simple mock for admin users
  if (authHeader.includes('admin')) {
    return { userId: 'admin-1', email: 'admin@zion.os', role: 'admin' };
  }
  
  return { userId: 'user-1', email: 'user@zion.os', role: 'user' };
}

export function isInternalAgentRequest(req: ApiRequest): boolean {
  // Check for internal agent headers or IPs
  const userAgent = req.headers['user-agent'] || '';
  const userAgentString = Array.isArray(userAgent) ? userAgent[0] : userAgent;
  const internalAgents = ['zion-bot', 'internal-agent', 'automation'];
  
  return internalAgents.some(agent => userAgentString.toLowerCase().includes(agent));
}

export const isAdmin = () => {
  // Placeholder implementation
  return true;
};
