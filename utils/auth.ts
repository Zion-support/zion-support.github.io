<<<<<<< HEAD
import type { NextApiRequest } from 'next',;
;
export function getRequestUserEmail(req:NextApiRequest):string | null {;
  const emailHeader = req.headers['x-user-email'],;
  if (Array.isArray(emailHeader)) return emailHeader[0] || null,;
  return (emailHeader as string) || null;
}
;
export function isAdminEmail(email:string | null | undefined):boolean {;
  if (!email) return false,;
  const admins = (process.env.ADMIN_EMAILS || '').split(',').map((e) => e.trim().toLowerCase()).filter(Boolean),;
  return admins.includes(email.toLowerCase()),;
=======
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
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}