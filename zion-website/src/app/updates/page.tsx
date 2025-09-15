import React from 'react'

type UpdateItem = {
  title: string
  date: string
  summary: string
  href: string
}

const updates: UpdateItem[] = [
  {
    title: 'AI Research Lab Launch',
    date: '2025-09-15',
    summary:
      'We launched our AI Research Lab to accelerate innovation in autonomous systems and applied AI.',
    href: '#ai-research-lab',
  },
  {
    title: 'Case Study: 60% Cost Savings with Automation',
    date: '2025-09-10',
    summary:
      'Learn how a client achieved significant OPEX reduction using our AI process automation suite.',
    href: '#automation-case-study',
  },
  {
    title: 'Zion Tech Summit 2025 – Registration Open',
    date: '2025-09-05',
    summary:
      'Join workshops, product showcases, and expert panels on AI, cloud, and Web3.',
    href: '#zion-tech-summit',
  },
  {
    title: 'New Course: Advanced Blockchain Development',
    date: '2025-09-01',
    summary:
      'Comprehensive course covering smart contracts, DeFi, L2 scaling, audits, and security.',
    href: '#advanced-blockchain-course',
  },
]

export default function UpdatesPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="relative isolate px-6 pt-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Latest Updates</h1>
          <p className="mt-4 text-lg text-gray-300">
            News, announcements, courses, and events from Zion Tech Group and Zion Academy.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {updates.map((u) => (
            <article key={u.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold">
                  <a href={u.href} className="hover:text-blue-400">
                    {u.title}
                  </a>
                </h2>
                <time className="text-sm text-gray-400" dateTime={u.date}>
                  {new Date(u.date).toLocaleDateString()}
                </time>
              </div>
              <p className="mt-3 text-gray-300">{u.summary}</p>
              <a href={u.href} className="mt-4 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300">
                Read more →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 border border-white/10">
          <h3 className="text-2xl font-bold">Want updates in your inbox?</h3>
          <p className="mt-2 text-gray-300">Subscribe to our newsletter for monthly highlights and event invites.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

