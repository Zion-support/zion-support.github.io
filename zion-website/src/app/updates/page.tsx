import React from 'react'
import Link from 'next/link'
import { getLatestUpdates } from '@/data/updates'

export default function UpdatesIndexPage() {
  const updates = getLatestUpdates(24)
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Latest updates</h1>
        <p className="mt-2 text-zinc-300">New product launches, guides, and case studies.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((u) => (
            <Link
              key={u.href}
              href={u.href}
              className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 hover:bg-zinc-900/60 transition"
            >
              <div className="text-xs uppercase tracking-wide text-zinc-400">{u.tag ?? 'Update'}</div>
              <h3 className="mt-1 text-lg font-medium text-white">{u.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{u.summary}</p>
              <div className="mt-3 text-xs text-zinc-500">{u.date}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

