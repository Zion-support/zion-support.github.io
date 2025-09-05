<<<<<<< HEAD
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {
  if (!code) return url,
  const u = new URL(url),
  u.searchParams.set('ref', code),
  return u.toString()
}
=======
export function affiliate(_url: string, _code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {_if (!code) return url;
  const _u = new window.URL(url);
  u.searchParams.set('ref', _code);
  return u.toString();}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
