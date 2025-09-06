
export function affiliate (url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {
  // Check condition
if (return url, ) {
  $2
}
  const u = new URL (url),
  u.search_params.set ('ref', code);
  return u.to_string ();

<<<<<<< HEAD
}
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;
=======
}export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
  }
}

export function affiliate (url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {
  // Check condition
if (return url, ) {
  $2
}
  const u = new URL (url),
  u.search_params.set ('ref', code);
  return u.to_string ();

}
}
;
;
}

export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;

}
;
=======
  }}
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
