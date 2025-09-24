
import { NextApiRequest, NextApiResponse } from 'next',
export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session,
  const authHeader = req.headers.authorization,
  if (!authHeader |!authHeader.startsWith('Bearer ')) {
    return null}
  return user}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming)),