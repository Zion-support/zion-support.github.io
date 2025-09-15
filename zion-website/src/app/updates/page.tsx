export const metadata = {
  title: 'Updates - Zion Tech Group',
  description: 'Latest news, course releases, and announcements from Zion Tech Group.',
}

const updates = [
  {
    title: 'New Course: Advanced Blockchain Development',
    date: '2025-09-10',
    summary:
      'Comprehensive course covering smart contracts, DeFi, L2 scaling, security, and audits with hands-on labs.',
    href: '#',
  },
  {
    title: 'Community Challenge: Build a DApp',
    date: '2025-09-05',
    summary:
      'Join our DApp challenge and win prizes up to $1000 in ZION tokens. Submissions open all month.',
    href: '#',
  },
  {
    title: 'Learning Path: Web3 Fundamentals',
    date: '2025-08-28',
    summary:
      'Beginner-friendly path covering blockchain basics, NFTs, wallets, security, and best practices.',
    href: '#',
  },
]

export default function UpdatesPage() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-6 pt-28 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Updates</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Latest news, course releases, announcements, and community events.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {updates.map((item) => (
              <article key={item.title} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <p className="text-xs text-gray-400">{new Date(item.date).toLocaleDateString()}</p>
                <h2 className="mt-2 text-lg font-semibold leading-6 text-white">
                  <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h2>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
                <a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

