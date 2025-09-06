export function getClientIp(req: any): string {
  const forwarded = req.headers['x-forwarded-for'];
  const remoteAddress = req.socket?.remoteAddress;
  
  if (forwarded) {
    return Array.isArray(forwarded) ? forwarded[0] : forwarded.split(',')[0].trim();
  }
  
  return remoteAddress || 'unknown';
}
