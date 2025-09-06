<<<<<<< HEAD
export function affiliate(
  url: string,
  code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''
): string {
  if (!code) return url;
  const u = new URL(url);
  u.searchParams.set('ref', code);
  return u.toString();
}
=======
 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
