
export function affiliate (url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {
  // Check condition
if (return url, ) {
  $2
}
  const u = new URL (url),
  u.search_params.set ('ref', code);
  return u.to_string ();

}export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;
  if (!code) return url,;
  const u = new URL(url),;
  u.searchParams.set('ref', code);
  return u.toString();
  if (!code) return url;
  const u = new URL(url);
  u.searchParams.set('ref', code);
  return u.toString();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }}
