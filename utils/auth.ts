<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export function authenticateRequest(req: NextApiRequest, res: NextApiResponse): boolean {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		res.status(401).json({ error: 'Unauthorized' });
		return false;
	}
	const token = authHeader.substring(7);
	if (token === 'valid-token') return true;
	res.status(401).json({ error: 'Invalid token' });
	return false;
}

export function getUserId(req: NextApiRequest): string | null {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
	const token = authHeader.substring(7);
	return token === 'valid-token' ? 'user-123' : null;
}

=======
import type { NextApiRequest } from 'next';
>>>>>>> merged-prs-20250907-203621
export function getRequestUserEmail(req: NextApiRequest): string | null {
	const emailHeader = (req.headers['x-user-email'] as string | string[] | undefined) || null;
	if (Array.isArray(emailHeader)) return emailHeader[0] || null;
	return emailHeader || null;
}

export function isAdminEmail(email: string | null | undefined): boolean {
<<<<<<< HEAD
	if (!email) return false;
	const admins = (process.env.ADMIN_EMAILS || '')
		.split(',')
		.map((e) => e.trim().toLowerCase())
		.filter((e) => !!e);
	return admins.includes(email.toLowerCase());
}

export function parseUserFromRequest(req: NextApiRequest): { email: string | null } {
  return { email: getRequestUserEmail(req) };
}

export function ensureAdmin(req: NextApiRequest): { allowed: boolean } {
  const { email } = parseUserFromRequest(req);
  return { allowed: isAdminEmail(email) };
}

export function ensureAdminFromApi(req: NextApiRequest): Promise<{ allowed: boolean }> {
  return Promise.resolve(ensureAdmin(req));
}
=======
  if (!email) return false,
  const admins = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter($2);
  return admins.includes(email.toLowerCase())
}
>>>>>>> merged-prs-20250907-203621
