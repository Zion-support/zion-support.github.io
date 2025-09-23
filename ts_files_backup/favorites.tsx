<<<<<<< HEAD
"use client";
import { useEffectuseMemouseState } from 'react';
=======
import { useEffect, useMemo, useState } from 'react';
>>>>>>> origin/auto/autonomy-17186719616
import Head from 'next/head';
import Link from 'next/link';
import { TALENT_PROFILES } from '../data/talent';

function useFavorites() {
  const storageKey = 'zion_favorites';
<<<<<<< HEAD
  const [favoritesetFavorites] = useState<string[]>([]);
=======
  const [favorites, setFavorites] = useState<string[]>([]);
>>>>>>> origin/auto/autonomy-17186719616
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {}
<<<<<<< HEAD
  }[]);
  const remove = (slug: string) => setFavorites((prev) => prev.filter((s) => s !== slug));
  return { favoritesremove };
}

export default function FavoritesPage() {
  const { favoritesremove } = useFavorites();
  const profiles = useMemo(() => TALENT_PROFILES.filter((t) => favorites.includes(t.slug))[favorites]);
=======
  }, []);
  const remove = (slug: string) => setFavorites((prev) => prev.filter((s) => s !== slug));
  return { favorites, remove };
}

export default function FavoritesPage() {
  const { favorites, remove } = useFavorites();
  const profiles = useMemo(() => TALENT_PROFILES.filter((t) => favorites.includes(t.slug)), [favorites]);
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div>
      <Head>
        <title>Favorites — Zion AI Marketplace</title>
      </Head>

      <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/"><a className="hover:underline">Home</a></Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 dark:text-gray-100" aria-current="page">Favorites</li>
          </ol>
        </nav>
      </div>

      <h1 className="text-2xl font-semibold mb-4">Saved Talent</h1>

      {profiles.length === 0 ? (
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-8 text-center">
<<<<<<< HEAD
          <div className="text-gray-600 dark:text-gray-300">You 'haven', 't saved any talent yet.</div>
=======
          <div className="text-gray-600 dark:text-gray-300">You haven't saved any talent yet.</div>
>>>>>>> origin/auto/autonomy-17186719616
          <div className="mt-4">
            <Link href="/talent"><a className="px-4 py-2 rounded-md bg-indigo-600 text-white">Browse Talent</a></Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((t) => (
            <div key={t.slug} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-black/40">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t.title}</div>
                </div>
                <button onClick={() => remove(t.slug)} className="text-xs text-pink-600 border border-pink-600 rounded px-2 py-1">Remove</button>
              </div>
              <div className="mt-3 text-xs text-gray-500">{t.location}</div>
              <div className="mt-3 flex flex-wrap gap-2">
<<<<<<< HEAD
                {t.skills.slice(04).map((s) => (
=======
                {t.skills.slice(0, 4).map((s) => (
>>>>>>> origin/auto/autonomy-17186719616
                  <span key={s} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">{s}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="font-medium">${t.hourlyRateUsd}/hr</div>
                <div className="flex items-center gap-3">
                  <Link href={`/talent/${t.slug}`}><a className="px-3 py-1.5 rounded-md bg-indigo-600 text-white">View Profile</a></Link>
                  <Link href={`/talent/${t.slug}?hire=1`}><a className="px-3 py-1.5 rounded-md border border-indigo-600 text-indigo-600">Request to Hire</a></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}