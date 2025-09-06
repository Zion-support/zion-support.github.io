export interface DevAccessConfig {
  allowed: boolean;
  reason?: string;
  expiresAt?: string;
}

export function checkDevAccess(req: any): DevAccessConfig {
  // Mock implementation - in a real app, this would check authentication
  const devKey = req.headers['x-dev-key'];
  
  if (devKey === process.env.DEV_ACCESS_KEY) {
    return {
      allowed: true,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
    };
  }
  
  return {
    allowed: false,
    reason: 'Invalid or missing dev access key'
  };
}

export function requireDevAccess(req: any): void {
  const access = checkDevAccess(req);
  if (!access.allowed) {
    throw new Error(access.reason || 'Dev access required');
  }
}