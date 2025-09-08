export interface DevAccessConfig {
  isDevMode: boolean;
  allowedIPs: string[];
  allowedUsers: string[];
}

export function checkDevAccess(req: any): boolean {
  // Mock implementation - in production, this would check actual dev access
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  
  // Check IP whitelist, user authentication, etc.
  const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const allowedIPs = process.env.DEV_ACCESS_IPS?.split(',') || [];
  
  return allowedIPs.includes(clientIP);
}

export function getDevAccessConfig(): DevAccessConfig {
  return {
    isDevMode: process.env.NODE_ENV === 'development',
    allowedIPs: process.env.DEV_ACCESS_IPS?.split(',') || [],
    allowedUsers: process.env.DEV_ACCESS_USERS?.split(',') || []
  };
}