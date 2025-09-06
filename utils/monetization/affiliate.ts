<<<<<<< HEAD



export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE |''): string {if (!code) return url;
  const u = new URL(url);
  u.searchParams.set('ref', code);
  return u.toString();
}
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;

  if (!code) return url;
  const u = new URL(url);
  u.searchParams.set('ref', code);
  return u.toString();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

export function affiliate (url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {
  // Check condition
if (return url, ) {
  $2
}
  const u = new URL (url),
  u.search_params.set ('ref', code);
  return u.to_string ();

}

<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;
=======
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}
;
