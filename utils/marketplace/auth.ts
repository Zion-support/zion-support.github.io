import { NextApiRequest } from 'next';

export interface MarketplaceUser {
  id: string;
  email: string;
  role: 'client' | 'talent' | 'admin';
  talentSlug?: string;
  verified: boolean;
}

export function getMarketplaceUser(req: NextApiRequest): MarketplaceUser | null {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);
  if (token === 'demo-token') {
    return {
      id: 'demo-user-123',
      email: 'demo@example.com',
      role: 'client',
      verified: true
    };
  }

  return null;
}

export function requireMarketplaceAuth(req: NextApiRequest): MarketplaceUser {
  const user = getMarketplaceUser(req);
  if (!user) {
    throw new Error('Authentication required');
  }
  return user;
}