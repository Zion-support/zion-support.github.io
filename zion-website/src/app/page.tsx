import React from 'react'
import { getLatestUpdates } from '@/data/updates'

export default function HomePage() {
  const latest = getLatestUpdates(6)
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl py-24 text-center">
          <p className="text-sm text-blue-300">New</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">{latest[0]?.title}</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">{latest[0]?.summary}</p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <a href={latest[0]?.href ?? '/updates'} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">Read update</a>
            <a href="/updates" className="text-sm font-semibold leading-6">All updates <span aria-hidden>→</span></a>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Latest updates</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((item) => (
              <a key={item.href} href={item.href} className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-xs text-blue-300">
                  {item.tag}
                  {item.date ? (
                    <>
                      {' '}• <time dateTime={item.date}>{new Date(item.date).toLocaleDateString()}</time>
                    </>
                  ) : null}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{item.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}