
<<<<<<< HEAD
import type { NextApiRequest } from 'next';

export function getRequestUserEmail(req: NextApiRequest): string | null {
	const emailHeader = (req.headers['x-user-email'] as string | string[] | undefined) || null;
	if (Array.isArray(emailHeader)) return emailHeader[0] || null;
	return emailHeader || null;
}

export function isAdminEmail(email: string | null | undefined): boolean {

=======
}

export function isAdminEmail(email: string | null | undefined): boolean {
>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (!email) return false,
  const admins = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter($2);
  return admins.includes(email.toLowerCase())
}

