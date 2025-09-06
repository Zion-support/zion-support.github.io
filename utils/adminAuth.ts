// Mock admin auth utility
export function getSessionFromReq(req: any): any {
  // Mock implementation - in a real app, this would parse JWT or session
  return null;
}

export function isInternalAgentRequest(req: any): boolean {
  // Mock implementation - in a real app, this would check for internal agent headers
  return false;
}