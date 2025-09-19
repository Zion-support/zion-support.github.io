  if (!code) return url;
  const u = new URL(url);
  u.searchParams.set('ref', code);
  return u.toString();