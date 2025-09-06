// Mock admin auth utility
export function getSessionFromReq(req: any): any {
  // Mock implementation - in a real app, this would parse JWT or session
  return null;
}

<<<<<<< HEAD
export const isAdmin = () => {
  // Placeholder implementation
  return true;
};
=======
export function isInternalAgentRequest(req: any): boolean {
  // Mock implementation - in a real app, this would check for internal agent headers
  return false;
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
