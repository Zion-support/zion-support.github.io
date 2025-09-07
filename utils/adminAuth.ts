import { NextApiRequest, NextApiResponse } from 'next';

export function setSessionCookie(res: NextApiResponse, token: string) {
  res.setHeader('Set-Cookie', `admin-session=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`);
}

export function clearSessionCookie(res: NextApiResponse) {
  res.setHeader('Set-Cookie', `admin-session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`);
}

export function verifyAdminToken(token: string): boolean {
  // Simple token verification - in production, use JWT or similar
  return token.startsWith('admin-');
}

export function getSessionFromReq(req: NextApiRequest): string | null {
  const cookies = req.headers.cookie;
  if (!cookies) return null;
  
  const sessionCookie = cookies
    .split(';')
    .find(c => c.trim().startsWith('admin-session='));
  
  if (!sessionCookie) return null;
  
  return sessionCookie.split('=')[1];
}

export function isInternalAgentRequest(req: NextApiRequest): boolean {
  const userAgent = req.headers['user-agent'] || '';
  return userAgent.includes('internal-agent') || userAgent.includes('bot');
}