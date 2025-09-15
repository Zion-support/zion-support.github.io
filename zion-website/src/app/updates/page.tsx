import React from 'react'

const updates = [
  {
    title: 'New Course: Advanced Blockchain Development',
    date: '2025-09-15',
    summary:
      'Comprehensive blockchain course covering smart contracts, DeFi, L2 scaling, and security best practices.',
    href: '/contact',
  },
  {
    title: 'Community Challenge: Build a DApp',
    date: '2025-09-10',
    summary:
      'Join our DApp challenge and win prizes up to $1000 in ZION tokens. Submissions close next month.',
    href: '/contact',
  },
  {
    title: 'Learning Path: Web3 Fundamentals',
    date: '2025-09-01',
    summary:
      'Beginner-friendly path covering blockchain basics, NFTs, wallets, and Web3 security essentials.',
    href: '/contact',
  },
]

export default function UpdatesPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Latest Updates</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            News, courses, and announcements from Zion Tech Group and Zion Academy.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {updates.map((item) => (
              <article key={item.title} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <p className="text-xs text-gray-400" aria-label={`Published on ${item.date}`}>{item.date}</p>
                <h2 className="mt-2 text-lg font-semibold leading-6 text-white">
                  <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
                <a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                  Get details <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

