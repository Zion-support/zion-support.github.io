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
    date: '2025-09-15',
    summary:
      'A deep-dive curriculum covering smart contracts, L2 scaling, security audits, and production-grade DApps.',
    href: '#advanced-blockchain-course',
    tag: 'New Course',
  },
  {
    title: 'Community Challenge: Build a DApp',
    date: '2025-09-10',
    summary:
      'Join our 4-week DApp challenge. Top projects win mentorship and up to $1,000 in ZION tokens.',
    href: '#community-dapp-challenge',
    tag: 'Challenge',
  },
  {
    title: 'Learning Path: Web3 Fundamentals',
    date: '2025-09-05',
    summary:
      'A beginner-friendly guided path to master blockchain basics, wallets, NFTs, and Web3 security.',
    href: '#web3-fundamentals-path',
    tag: 'Learning Path',
  },
]

export default function UpdatesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl py-10 lg:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Latest <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Updates</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Fresh announcements, courses, and community programs from Zion Academy.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((item) => (
            <article key={item.title} className="flex flex-col justify-between rounded-2xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.01]">
              <div>
                <div className="flex items-center gap-2 text-xs">
                  {item.tag ? (
                    <span className="rounded-full bg-blue-600/20 px-2 py-0.5 font-medium text-blue-400">{item.tag}</span>
                  ) : null}
                  <span className="text-gray-400">{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-300">{item.summary}</p>
              </div>
              <div className="mt-6">
                <a href={item.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}

