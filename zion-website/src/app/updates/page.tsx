
type UpdateItem = {
  title: string
  date: string
  category: 'Course' | 'Announcement' | 'Community'
  summary: string
}

const updates: UpdateItem[] = [
  {
    title: 'Advanced Blockchain Development (Fall 2025)',
    date: '2025-09-10',
    category: 'Course',
    summary:
      'Deep dive into smart contracts, security patterns, DeFi protocols, L2 scaling, audits, and production tooling.',
  },
  {
    title: 'Community Challenge: Build a DApp',
    date: '2025-09-08',
    category: 'Community',
    summary:
      'Showcase your DApp. Win up to $1000 in ZION tokens. Submissions close Oct 15. Starter kits and mentors available.',
  },
  {
    title: 'Web3 Fundamentals Learning Path',
    date: '2025-09-05',
    category: 'Course',
    summary:
      'Beginner-friendly path covering blockchain basics, wallets, NFTs, and Web3 security best practices.',
  },
  {
    title: 'Zion Academy Fall 2025 Release Notes',
    date: '2025-09-01',
    category: 'Announcement',
    summary:
      'New courses, refreshed labs, and expanded certifications. Improved accessibility and mobile experience.',
  },
]

export default function UpdatesPage() {
  return (
    <div className="bg-black">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-8 lg:py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Updates</h1>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              New releases, announcements, and community programs from Zion Academy.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {updates.map((item) => (
            <article
              key={`${item.title}-${item.date}`}
              className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-sm text-blue-300">
                <span className="px-2 py-0.5 rounded-full bg-blue-600/10 border border-blue-600/30">
                  {item.category}
                </span>
                <span className="text-gray-400">{new Date(item.date).toLocaleDateString()}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
              <a href="/contact" className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                Get details <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-3xl text-center mt-16">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200 hover:scale-105"
          >
            Partner with Zion Academy
          </a>
        </div>
      </div>
    </div>
  )
}

