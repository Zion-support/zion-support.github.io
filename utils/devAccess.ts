// Development access utilities
export interface DevAccessConfig {
  enabled: boolean;
  allowedIPs: string[];
  allowedUsers: string[];
}

export function checkDevAccess(
  ip: string,
  userAgent: string,
  config: DevAccessConfig
): boolean {
  if (!config.enabled) {
    return false;
  }

  // Check IP whitelist
  if (config.allowedIPs.length > 0 && !config.allowedIPs.includes(ip)) {
    return false;
  }

  // Check user agent for development tools
  const isDevTools = userAgent.includes('dev') || 
                     userAgent.includes('test') || 
                     userAgent.includes('localhost');

  return isDevTools;
}

export function getClientIP(req: any): string {
  return (
    req.headers['x-forwarded-for'] ||
    req.headers['x-real-ip'] ||
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.ip ||
    'unknown'
  );
}