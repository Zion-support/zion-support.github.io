export function getClientIP(req: any): string {
  // Check various headers for the real IP
  const forwarded = req.headers['x-forwarded-for'];
  const realIP = req.headers['x-real-ip'];
  const cfConnectingIP = req.headers['cf-connecting-ip'];
  
  if (cfConnectingIP) return cfConnectingIP;
  if (realIP) return realIP;
  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, take the first one
    return forwarded.split(',')[0].trim();
  }
  
  // Fallback to connection remote address
  return req.socket?.remoteAddress || req.connection?.remoteAddress || 'unknown';
}

export function isPrivateIP(ip: string): boolean {
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

export function getIPInfo(ip: string): {
  ip: string;
  isPrivate: boolean;
  country?: string;
  region?: string;
  city?: string;
} {
  return {
    ip,
    isPrivate: isPrivateIP(ip),
    // In a real app, you'd use a service like ipapi.co or similar
    country: 'Unknown',
    region: 'Unknown',
    city: 'Unknown'
  };
}