// IP address utilities
export interface IPInfo {
  ip: string;
  country?: string;
  region?: string;
  city?: string;
  isp?: string;
  isProxy?: boolean;
  isVpn?: boolean;
  isTor?: boolean;
  riskScore?: number;
}

export function getClientIP(req: any): string {
  // Check various headers for the real IP
  const forwarded = req.headers['x-forwarded-for'];
  const realIP = req.headers['x-real-ip'];
  const cfConnectingIP = req.headers['cf-connecting-ip'];
  
  if (cfConnectingIP) {
    return cfConnectingIP.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP.split(',')[0].trim();
  }
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  // Fallback to connection remote address
  return req.connection?.remoteAddress || req.socket?.remoteAddress || 'unknown';
}

export function isValidIP(ip: string): boolean {
  // IPv4 regex
  const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  
  // IPv6 regex (simplified)
  const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  
  return ipv4Regex.test(ip) || ipv6Regex.test(ip);
}

export function isPrivateIP(ip: string): boolean {
  // Private IPv4 ranges
  const privateRanges = [
    /^10\./,
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
    /^192\.168\./,
    /^127\./,
    /^169\.254\./,
    /^::1$/,
    /^fc00:/,
    /^fe80:/
  ];
  
  return privateRanges.some(range => range.test(ip));
}

export function isLocalhost(ip: string): boolean {
  return ip === '127.0.0.1' || ip === '::1' || ip === 'localhost';
}

export async function getIPInfo(ip: string): Promise<IPInfo | null> {
  if (!isValidIP(ip) || isPrivateIP(ip)) {
    return {
      ip,
      country: 'Private',
      region: 'Private',
      city: 'Private',
      isp: 'Private',
      isProxy: false,
      isVpn: false,
      isTor: false,
      riskScore: 0
    };
  }

  try {
    // Using ipapi.co as a free IP geolocation service
    const response = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.reason || 'IP lookup failed');
    }
    
    return {
      ip,
      country: data.country_name,
      region: data.region,
      city: data.city,
      isp: data.org,
      isProxy: data.proxy || false,
      isVpn: data.vpn || false,
      isTor: data.tor || false,
      riskScore: calculateRiskScore(data)
    };
  } catch (error) {
    console.error('IP lookup failed:', error);
    return {
      ip,
      riskScore: 0.5 // Medium risk if we can't determine
    };
  }
}

function calculateRiskScore(data: any): number {
  let score = 0;
  
  // High risk countries (example)
  const highRiskCountries = ['CN', 'RU', 'KP', 'IR'];
  if (highRiskCountries.includes(data.country_code)) {
    score += 0.3;
  }
  
  // Proxy/VPN detection
  if (data.proxy) score += 0.4;
  if (data.vpn) score += 0.3;
  if (data.tor) score += 0.5;
  
  // Mobile networks (often used for fraud)
  if (data.org && data.org.toLowerCase().includes('mobile')) {
    score += 0.2;
  }
  
  return Math.min(score, 1.0);
}

export function isHighRiskIP(ipInfo: IPInfo): boolean {
  return (ipInfo.riskScore || 0) > 0.7;
}

export function isSuspiciousIP(ipInfo: IPInfo): boolean {
  return (ipInfo.riskScore || 0) > 0.4;
}

export function formatIPInfo(ipInfo: IPInfo): string {
  const parts = [ipInfo.city, ipInfo.region, ipInfo.country].filter(Boolean);
  const location = parts.length > 0 ? parts.join(', ') : 'Unknown';
  
  let flags = [];
  if (ipInfo.isProxy) flags.push('Proxy');
  if (ipInfo.isVpn) flags.push('VPN');
  if (ipInfo.isTor) flags.push('Tor');
  
  const flagStr = flags.length > 0 ? ` (${flags.join(', ')})` : '';
  
  return `${ipInfo.ip} - ${location}${flagStr}`;
}