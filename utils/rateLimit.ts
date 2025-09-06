// Mock rate limiting utility
export function rateLimit(req: any, res: any, next: any) {
  // Mock implementation - in a real app, this would implement rate limiting
  if (next) {
    next();
  }
<<<<<<< HEAD

  return true;
=======
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
