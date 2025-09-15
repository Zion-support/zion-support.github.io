import React from 'react'

export const metadata = {
  title: 'Updates | Zion Tech Group',
  description: 'Latest news, releases, and learning content from Zion Tech Group.',
}

export default function UpdatesPage() {
  const updates = [
    {
      title: 'Launch: Advanced Blockchain Development Course',
      date: '2025-09-15',
      summary:
        'A comprehensive, project-based curriculum covering smart contracts, security, L2 scaling, and audits.',
      href: '#blockchain-course',
      category: 'Courses',
    },
    {
      title: 'Community Challenge: Build a Production-Ready DApp',
      date: '2025-09-12',
      summary:
        'Showcase your skills and win prizes. Top submissions get mentorship and feature highlights.',
      href: '#dapp-challenge',
      category: 'Community',
    },
    {
      title: 'Learning Path: Web3 Fundamentals',
      date: '2025-09-10',
      summary:
        'Beginner-friendly track with essential blockchain concepts, NFTs, wallets, and security basics.',
      href: '#web3-fundamentals',
      category: 'Learning',
    },
  ]

  return (
    <main className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl py-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Updates</h1>
          <p className="mt-4 text-lg text-gray-300">
            Discover the latest news, releases, and learning content from Zion Tech Group.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {updates.map((item) => (
            <article
              key={item.title}
              id={item.href.replace('#', '')}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-300">{item.category}</span>
                <time dateTime={item.date}>{item.date}</time>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-2 text-gray-300">{item.summary}</p>
              <a
                href={item.href}
                className="mt-4 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300"
              >
                Read details →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8">
          <h3 className="text-xl font-semibold text-white">Stay in the loop</h3>
          <p className="mt-2 text-gray-300">
            We post new content weekly. Bookmark this page or contact us to get notified.
          </p>
          <div className="mt-4">
            <a
              href="/contact"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

