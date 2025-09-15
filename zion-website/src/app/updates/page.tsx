import React from 'react'

type UpdateItem = {
  title: string
  date: string
  summary: string
  href: string
  tag: string
}

const updates: UpdateItem[] = [
  {
    title: 'Launch: Advanced Blockchain Development Course',
    date: '2025-09-15',
    summary:
      'A comprehensive hands-on course covering smart contracts, DeFi protocols, layer-2 scaling, and security best practices.',
    href: '/updates/advanced-blockchain-development',
    tag: 'Course'
  },
  {
    title: 'Community DApp Challenge – Win up to $1,000',
    date: '2025-09-10',
    summary:
      'Build and ship a production-grade decentralized application. Top projects receive mentorship and prizes.',
    href: '/updates/dapp-challenge-2025',
    tag: 'Community'
  },
  {
    title: 'New Learning Path: Web3 Fundamentals',
    date: '2025-09-08',
    summary:
      'A curated beginner track introducing blockchain basics, wallets, NFTs, and foundational Web3 security.',
    href: '/updates/web3-fundamentals-path',
    tag: 'Learning Path'
  },
  {
    title: 'Research Note: AI-Assisted Quantum Optimization',
    date: '2025-09-05',
    summary:
      'Early results from combining reinforcement learning with quantum-inspired optimizers for complex scheduling.',
    href: '/updates/ai-quantum-optimization',
    tag: 'Research'
  }
]

export default function UpdatesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Updates</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            News, releases, courses, and research highlights from Zion Academy.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {updates.map((item) => (
              <article key={item.title} className="flex flex-col justify-between rounded-2xl bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="rounded-full bg-blue-500/10 px-2 py-1 text-blue-300">{item.tag}</span>
                    <time dateTime={item.date}>{new Date(item.date).toLocaleDateString()}</time>
                  </div>
                  <h2 className="mt-4 text-lg font-semibold leading-6 text-white">
                    <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                      <span className="absolute inset-0" />
                      {item.title}
                    </a>
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
                </div>
                <div className="mt-6">
                  <a href={item.href} className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                    Read more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

