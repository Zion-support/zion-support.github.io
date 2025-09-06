







import { NextApiRequest, NextApiResponse } from 'next';

export function getUserFromRequest(req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const authHeader = req.headers.authorization;

  if (!authHeader |!authHeader.startsWith('Bearer ')) {

    return null;
  }
  return user;
}




export function getUserFromRequest (req: any): User | null {
  // Mock implementation - in production, this would extract user from JWT or session;
  const auth_header = req.headers.authorization;
  if () {) {
  $2
}
    return null;
  }
  return user;
}


