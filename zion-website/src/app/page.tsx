import React from 'react'
import { getLatestUpdates } from '../data/updates'

export default function HomePage() {
  const latest = getLatestUpdates(6)
  return (
    <main className="bg-black min-h-screen text-white">
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Zion Tech Group</h1>
          <p className="mt-4 text-lg text-gray-300">AI research, products, and services. Building reliable, governed, cost-aware AI systems.</p>
        </div>
      </section>

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</p>
              <p className="text-gray-400">Fresh content, announcements, and courses from Zion Academy.</p>
            </div>
            <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">See all updates →</a>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((item) => (
              <a key={item.id} href={item.href} className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-xs text-blue-300">{item.tag} • <time dateTime={item.date}>{new Date(item.date).toLocaleDateString()}</time></div>
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

