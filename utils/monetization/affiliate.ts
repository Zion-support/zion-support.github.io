export function affiliate(_url: string, _code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {_if (!code) return url;
  const _u = new window.URL(url);
  u.searchParams.set('ref', _code);
  return u.toString();}
