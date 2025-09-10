import type { NextApiRequest } from 'next';

export function getClientIP(req: NextApiRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  const realIP = req.headers['x-real-ip'];
  const remoteAddress = req.connection?.remoteAddress || req.socket?.remoteAddress;
  
  if (forwarded) {
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return Array.isArray(realIP) ? realIP[0] : realIP;
  }
  
  return remoteAddress || 'unknown';
}

export function isLocalIP(ip: string): boolean {
  return ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.');
}

export function getLocationFromIP(ip: string): { country: string; region: string; city: string } {
  // Mock implementation - in production, use a real IP geolocation service
  return {
    country: 'US',
    region: 'CA',
    city: 'San Francisco'
  };
}