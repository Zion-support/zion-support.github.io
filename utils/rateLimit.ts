// Mock rate limiting utility
export function rateLimit(req: any, res: any, next: any) {
  // Mock implementation - in a real app, this would implement rate limiting
  if (next) {
    next();
  }

  return true;
}
