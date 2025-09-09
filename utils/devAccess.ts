// Mock implementation for devAccess utilities
export function getGitStatus() {
  return { connected: true, branch: 'main' };
}

export function requireRoles(req: any, res: any, roles: string[]) {
  // Mock implementation - always return true for now
  return { user: 'admin', roles };
}