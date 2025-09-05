<<<<<<< HEAD
import type { NextApiRequest } from 'next',
export function getRequestUserEmail(req: NextApiRequest): string | null {
  const emailHeader = req.headers['x-user-email'],
  if (Array.isArray(emailHeader)) return emailHeader[0] || null,
  return (emailHeader as string) || null
}

export function isAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false,
  const admins = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean),
  return admins.includes(email.toLowerCase())
}
=======
import type {_NextApiRequest} from 'next';

export function getRequestUserEmail(_req: NextApiRequest): string | null {_const _emailHeader = req.headers['x-user-email'];
  if (Array.isArray(emailHeader)) return emailHeader[0] || null;
  return (emailHeader as string) || null;}

export function isAdminEmail(_email: string | null | undefined): boolean {_if (!email) return false;
  const _admins = (process.env.ADMIN_EMAILS || '').split(', _').map(_(e) => e.trim().toLowerCase()).filter(Boolean);
  return admins.includes(email.toLowerCase());}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
