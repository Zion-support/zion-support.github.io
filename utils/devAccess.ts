// Development access utilities
export interface DevAccessConfig {
  allowedIPs: string[];
  allowedUsers: string[];
  requireAuth: boolean;
  debugMode: boolean;
}

export const defaultDevAccessConfig: DevAccessConfig = {
  allowedIPs: ['127.0.0.1', '::1', 'localhost'],
  allowedUsers: ['admin', 'developer'],
  requireAuth: false,
  debugMode: process.env.NODE_ENV === 'development'
};

export function checkDevAccess(
  ip: string,
  user?: string,
  config: DevAccessConfig = defaultDevAccessConfig
): boolean {
  if (!config.debugMode) {
    return false;
  }

  if (config.allowedIPs.includes(ip)) {
    return true;
  }

  if (user && config.allowedUsers.includes(user)) {
    return true;
  }

  return false;
}

export function getDevHeaders(): Record<string, string> {
  return {
    'X-Dev-Mode': 'true',
    'X-Debug-Enabled': process.env.NODE_ENV === 'development' ? 'true' : 'false'
  };
}