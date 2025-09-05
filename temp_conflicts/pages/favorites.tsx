import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { TALENT_PROFILES } from '../data/talent';

function useFavorites() {
  const storageKey = 'zion_favorites';
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {}
  }, []);
  const remove = (slug: string) => setFavorites((prev) => prev.filter((s) => s !== slug));
  return { favorites, remove };
}

export default function FavoritesPage() {
  const { favorites, remove } = useFavorites();
  const profiles = useMemo(() => TALENT_PROFILES.filter((t) => favorites.includes(t.slug)), [favorites]);

  return (
    <div>
      <Head>
        <title>Favorites — Zion AI Marketplace</title>
      </Head>

      <div className=&quot;mb-6 text-sm text-gray-500 dark:text-gray-400&quot;>
        <nav aria-label=&quot;Breadcrumb&quot;>
          <ol className=&quot;flex items-center gap-2&quot;>
            <li><Link href=&quot;/&quot;><a className=&quot;hover:underline&quot;>Home</Link></Link></li>
            <li aria-hidden=&quot;true&quot;>/</li>
            <li className=&quot;text-gray-900 dark:text-gray-100&quot; aria-current=&quot;page&quot;>Favorites</li>
          </ol>
        </nav>
      </div>

      <h1 className=&quot;text-2xl font-semibold mb-4&quot;>Saved Talent</h1>

      {profiles.length === 0 ? (
        <div className=&quot;rounded-xl border border-gray-200 dark:border-gray-800 p-8 text-center&quot;>
          <div className=&quot;text-gray-600 dark:text-gray-300&quot;>You haven't saved any talent yet.</div>
          <div className=&quot;mt-4&quot;>
            <Link href=&quot;/talent&quot;><a className=&quot;px-4 py-2 rounded-md bg-indigo-600 text-white&quot;>Browse Talent</Link></Link>
          </div>
        </div>
      ) : (
        <div className=&quot;grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
          {profiles.map((t) => (
            <div key={t.slug} className=&quot;rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-black/40&quot;>
              <div className=&quot;flex items-center justify-between&quot;>
                <div>
                  <div className=&quot;font-medium&quot;>{t.name}</div>
                  <div className=&quot;text-sm text-gray-600 dark:text-gray-300&quot;>{t.title}</div>
                </div>
                <button onClick={() => remove(t.slug)} className=&quot;text-xs text-pink-600 border border-pink-600 rounded px-2 py-1&quot;>Remove</button>
              </div>
              <div className=&quot;mt-3 text-xs text-gray-500&quot;>{t.location}</div>
              <div className=&quot;mt-3 flex flex-wrap gap-2&quot;>
                {t.skills.slice(0, 4).map((s) => (
                  <span key={s} className=&quot;text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800&quot;>{s}</span>
                ))}
              </div>
              <div className=&quot;mt-4 flex items-center justify-between text-sm&quot;>
                <div className=&quot;font-medium&quot;>${t.hourlyRateUsd}/hr</div>
                <div className=&quot;flex items-center gap-3&quot;>
                  <Link href={`/talent/${t.slug}`}><a className=&quot;px-3 py-1.5 rounded-md bg-indigo-600 text-white&quot;>View Profile</Link></Link>
                  <Link href={`/talent/${t.slug}?hire=1`}><a className=&quot;px-3 py-1.5 rounded-md border border-indigo-600 text-indigo-600&quot;>Request to Hire</Link></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}