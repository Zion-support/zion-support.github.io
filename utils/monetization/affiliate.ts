<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
  if (!code) return url;
=======
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE |''): string {if (!code) return url;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const u = new URL(url);
  u.searchParams.set('ref', code);
  return u.toString();
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
<<<<<<< HEAD
;

=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;
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
  }
}
<<<<<<< HEAD
  const u = new URL (url),
  u.search_params.set ('ref', code);
  return u.to_string ();

}
=======

export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;
=======
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;

}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
