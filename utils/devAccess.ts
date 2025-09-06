// Development access utility functions
export function requireDevAccess(req: any): boolean {
  // Mock implementation - in production, check for dev environment or admin token
  return process.env.NODE_ENV === 'development' || req.headers['x-dev-key'] === 'dev-access';
}

export function ensureDevAccess(req: any, res: any): boolean {
  if (!requireDevAccess(req)) {
    res.status(403).json({ error: 'Development access required' });
    return false;
  }
  return true;
}