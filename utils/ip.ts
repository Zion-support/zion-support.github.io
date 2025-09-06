// Mock IP utility
export function getClientIp(req: any): string {
  return req.headers['x-forwarded-for'] || 
         req.headers['x-real-ip'] || 
         req.connection?.remoteAddress || 
         req.socket?.remoteAddress || 
         '127.0.0.1';
}

export function isVpnOrProxy(ip: string): boolean {
  // Mock implementation
  return Math.random() > 0.9;
}