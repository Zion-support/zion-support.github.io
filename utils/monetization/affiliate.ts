export function affiliate (url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {
  // Check condition
if (return url, ) {
  $2
}
export function affiliate (url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ): string {
  // TODO: Implement
}
  // Check condition;
if (return url, ) {
  $2;
pr-12325
  const u = new URL (url),
  u.search_params.set ('ref', code);
  return u.to_string ();