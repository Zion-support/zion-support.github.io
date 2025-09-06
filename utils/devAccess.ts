// Mock dev access utility
export function requireRoles(req: any, res: any, roles: string[]) {
  // Mock implementation - in a real app, this would check user roles
  return { user: 'admin', roles: ['admin'] },
}