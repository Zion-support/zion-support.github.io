
type UpdateItem = {
  title: string
  date: string
  summary: string
}

const updates: UpdateItem[] = [
  {
    title: 'Launch: Advanced Blockchain Development Course',
    date: '2025-09-15',
    summary:
      'A comprehensive course covering smart contracts, DeFi, L2 scaling, and security best practices. Enroll now to level up your Web3 skills.',
  },
  {
    title: 'Community Challenge: Build a DApp',
    date: '2025-09-20',
    summary:
      'Join our decentralized app challenge and compete for prizes, mentorship, and feature placement on our showcase.',
  },
  {
    title: 'New Learning Path: Web3 Fundamentals',
    date: '2025-09-22',
    summary:
      'A beginner-friendly path introducing blockchain basics, NFTs, wallets, security, and on-chain analytics.',
  },
  {
    title: 'Event: AI x Quantum Innovation Summit',
    date: '2025-10-01',
    summary:
      'A virtual summit exploring AI-accelerated research, quantum computing, and autonomous enterprise solutions.',
  },
]

export default function UpdatesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-8">
        <header className="max-w-2xl">
          <p className="text-base font-semibold leading-7 text-blue-400">What’s New</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Announcements, releases, events, and learning paths. Stay current with Zion Tech Group.
          </p>
        </header>

        <section className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col justify-between rounded-2xl bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <div>
                <p className="text-sm text-gray-400">{new Date(item.date).toLocaleDateString()}</p>
                <h2 className="mt-2 text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
              </div>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300"
                >
                  Get details <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  )
}

