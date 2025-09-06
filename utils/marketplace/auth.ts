// Mock marketplace authentication utilities
export interface DemoUser {
  id: string;
  role: 'client' | 'talent';
  talentSlug?: string;
}

export function getDemoUser(req: any): DemoUser {
  // Mock implementation - in production, this would parse JWT or session
  const role = req.headers['x-demo-role'] as string || 'client';
  const talentSlug = req.headers['x-demo-talent-slug'] as string;
  
  return {
    id: 'demo-user-123',
    role: role as 'client' | 'talent',
    talentSlug
  };
}

export function assertClient(req: any): DemoUser {
  const user = getDemoUser(req);
  if (user.role !== 'client') {
    const error = new Error('Client access required');
    (error as any).statusCode = 403;
    throw error;
  }
  return user;
}

export function assertTalentOrClientForOffer(req: any, offer: any, talentSlug?: string): DemoUser {
  const user = getDemoUser(req);
  if (user.role === 'client' && user.id === offer.clientId) return user;
  if (user.role === 'talent' && (user.talentSlug === offer.talentSlug || talentSlug === offer.talentSlug)) return user;
  
  const error = new Error('Access denied');
  (error as any).statusCode = 403;
  throw error;
}