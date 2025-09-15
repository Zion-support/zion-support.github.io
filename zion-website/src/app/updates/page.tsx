import React from 'react'

export const metadata = {
  title: 'Latest Updates | Zion Academy',
  description: 'News, courses, announcements, and product updates from Zion Academy.'
}

type UpdateItem = {
  title: string
  date: string
  summary: string
}

const updates: UpdateItem[] = [
  {
    title: 'Launch: Advanced Blockchain Development Course',
    date: '2025-09-12',
    summary:
      'A deep-dive course on smart contracts, DeFi protocols, L2 scaling, audits, and production patterns.'
  },
  {
    title: 'Community Challenge: Build a DApp (Prizes up to $1,000)',
    date: '2025-09-18',
    summary:
      'Showcase your skills by shipping a DApp. Winners receive ZION token prizes and mentorship.'
  },
  {
    title: 'New Learning Path: Web3 Fundamentals',
    date: '2025-09-08',
    summary:
      'A beginner-friendly learning path covering blockchain basics, NFTs, wallets, and Web3 security.'
  },
  {
    title: 'Release: AI Research Assistant v2.3',
    date: '2025-09-01',
    summary:
      'Quality-of-life improvements, faster inference pipelines, and new literature graph features.'
  }
]

export default function UpdatesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            News, courses, and announcements from Zion Academy. Stay up to date.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {updates.map((item) => (
              <article key={item.title} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <p className="text-xs uppercase tracking-wide text-blue-300/90">{new Date(item.date).toLocaleDateString()}</p>
                <h2 className="mt-2 text-lg font-semibold leading-6 text-white">
                  <span className="absolute inset-0" />
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

