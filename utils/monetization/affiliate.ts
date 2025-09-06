<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
  if (!code) return url;
  const u = new URL(url);
  u.searchParams.set('ref', code);
  return u.toString();
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
;

=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;
=======
export function affiliate(url: string, code: string = process.env.NEXT_PUBLIC_AFFILIATE_CODE || ''): string {;
<<<<<<< HEAD
  if (!code) return url,;
  const u = new URL(url),;
  u.searchParams.set('ref', code);
  return u.toString();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (!code) return url;
  const u = new URL(url);
  u.searchParams.set('ref', code);
  return u.toString();
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
