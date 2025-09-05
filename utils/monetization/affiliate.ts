<<<<<<< HEAD
export function affiliate(url:string, code:string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''):string {;
  if (!code) return url,;
  const u = new URL(url),;
  u.searchParams.set('ref', code),;
  return u.toString(),;
}
=======
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {
  if (!code) return url,
  const u = new URL(url),
  u.searchParams.set('ref', code),
  return u.toString()
}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
