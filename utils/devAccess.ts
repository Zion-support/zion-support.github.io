export function isDevEnvironment(): boolean {
  return process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_ENV === 'development';
}

export function hasDevAccess(req: any): boolean {
  // Check if request is from localhost or has dev token
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
  const devToken = req.headers['x-dev-token'];
  
  return isDevEnvironment() || 
         ip.includes('127.0.0.1') || 
         ip.includes('localhost') ||
         devToken === process.env.DEV_ACCESS_TOKEN;
}

export function requireDevAccess(req: any, res: any): boolean {
  if (!hasDevAccess(req)) {
    res.status(403).json({ error: 'Development access required' });
    return false;
  }
  return true;
}