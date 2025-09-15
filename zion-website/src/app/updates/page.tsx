import React from 'react'

type UpdateItem = {
  title: string
  date: string
  summary: string
  href: string
  tag?: string
}

const updates: UpdateItem[] = [
  {
    title: 'Launch: Advanced Blockchain Development Course',
    date: '2025-09-10',
    summary:
      'A deep-dive curriculum on smart contracts, DeFi, L2 scaling, and security best practices.',
    href: '/contact',
    tag: 'Course'
  },
  {
    title: 'Community Challenge: Build a Production-Ready DApp',
    date: '2025-09-12',
    summary:
      'Join our 3-week challenge. Top projects can win up to $1,000 in ZION tokens.',
    href: '/contact',
    tag: 'Challenge'
  },
  {
    title: 'Learning Path: Web3 Fundamentals',
    date: '2025-09-14',
    summary:
      'Start with the basics of blockchain, wallets, NFTs, and Web3 security to build confidence fast.',
    href: '/contact',
    tag: 'Learning Path'
  }
]

export default function UpdatesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl py-10 lg:py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Latest Updates</h1>
          <p className="mt-4 text-lg leading-7 text-gray-300">
            New courses, challenges, and announcements from Zion Academy.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((item) => (
            <article key={item.title} className="flex flex-col justify-between bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-300">
                  {item.tag ? <span className="rounded-full bg-blue-600/20 px-2 py-0.5 text-blue-300">{item.tag}</span> : null}
                  <span className="text-gray-400">{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
              </div>
              <div className="mt-6">
                <a href={item.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

