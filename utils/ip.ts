export interface IPInfo {
  ip: string;
  country?: string;
  region?: string;
  city?: string;
  isp?: string;
  isProxy?: boolean;
  isVpn?: boolean;
  isTor?: boolean;
  riskScore: number;
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

export function isPrivateIP(ip: string): boolean {
  // Check for private IP ranges
  const privateRanges = [
    /^10\./,
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
    /^192\.168\./,
    /^127\./,
    /^::1$/,
    /^fc00:/,
    /^fe80:/
  ];
  
  return privateRanges.some(range => range.test(ip));
}

export function isLocalhost(ip: string): boolean {
  return ip === '127.0.0.1' || ip === '::1' || ip === 'localhost';
}

export function validateIP(ip: string): boolean {
  // Basic IP validation
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}

export function getIPRiskScore(ip: string): number {
  let score = 0;
  
  // Private IPs are generally safe
  if (isPrivateIP(ip)) {
    return 0;
  }
  
  // Localhost is safe
  if (isLocalhost(ip)) {
    return 0;
  }
  
  // Invalid IPs are suspicious
  if (!validateIP(ip)) {
    return 100;
  }
  
  // Add more sophisticated risk scoring here
  // For now, return a basic score
  return Math.random() * 30; // Random score between 0-30 for demo
}

export function createIPInfo(ip: string): IPInfo {
  return {
    ip,
    riskScore: getIPRiskScore(ip),
    isProxy: false, // Would be determined by external service
    isVpn: false,   // Would be determined by external service
    isTor: false    // Would be determined by external service
  };
}