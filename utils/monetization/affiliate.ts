export function affiliate(url: string, code: string = $2;
  const u = new URL($2);
  u.searchParams.set($2);
  return u.toString()
}
  if (!code) return url;
  const u = new URL(url);
  u.searchParams.set('ref', code);
  return u.toString();
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
;