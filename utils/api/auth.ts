import { NextApiRequest, NextApiResponse } from 'next';
export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session
<<<<<<< HEAD
  const authHeader = req.headers.authorization;
  if (!authHeader |!authHeader.startsWith('Bearer ')) {
=======
  const authHeader = req && req.headers.authorization;
  if (!authHeader || !authHeader && authHeader.startsWith('Bearer ')) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return null;
  }
  return user;
}