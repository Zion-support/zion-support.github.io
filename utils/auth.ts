import type { NextApiRequest } from 'next';

export function getRequestUserEmail(req: NextApiRequest): string | null {
	const emailHeader = (req.headers['x-user-email'] as string | string[] | undefined) || null;
	if (Array.isArray(emailHeader)) return emailHeader[0] || null;
	return emailHeader || null;
}

export function isAdminEmail(email: string | null | undefined): boolean {

