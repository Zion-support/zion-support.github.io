<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

const updates = [
	{
		title: 'New Course: Advanced Blockchain Development',
		summary: 'Comprehensive blockchain course covering smart contracts, DeFi, L2 scaling, and security.',
		date: '2025-09-10',
		href: '/updates/advanced-blockchain-development',
	},
	{
		title: 'Community Challenge: Build a DApp',
		summary: 'Join our DApp challenge and win prizes up to $1000 in ZION tokens.',
		date: '2025-09-12',
		href: '/updates/dapp-challenge',
	},
	{
		title: 'New Learning Path: Web3 Fundamentals',
		summary: 'Beginner-friendly path covering blockchain basics, NFTs, and Web3 security.',
		date: '2025-09-14',
		href: '/updates/web3-fundamentals',
	},
	{
		title: 'Release: AI Research Assistant v2.0',
		summary: 'Major upgrade with multi-agent collaboration and faster literature synthesis.',
		date: '2025-09-15',
		href: '/updates/ai-research-assistant-v2',
	},
]

export default function UpdatesPage() {
	return (
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</h1>
					<p className="mt-4 text-lg leading-8 text-gray-300">
						News, releases, courses, and announcements from Zion Academy and the platform.
					</p>
				</div>
				<div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
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
									Read more <span aria-hidden="true">→</span>
								</a>
							</article>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
=======
=======
import React from 'react'
>>>>>>> origin/feat/updates-content-and-advertising
import { updates } from '@/data/updates'

export const metadata = {
  title: 'Updates | Zion Tech Group',
<<<<<<< HEAD
  description: 'Latest news, courses, research highlights, and announcements from Zion.',
}

export default function UpdatesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Latest Updates</h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            New content, announcements, challenges, and research highlights.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {updates.map((item) => (
              <article key={item.id} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <time dateTime={item.date} className="text-xs text-gray-400">
                  {new Date(item.date).toLocaleDateString()}
                </time>
                <h3 className="mt-2 text-lg font-semibold leading-6 text-white">
                  <a href={item.href ?? '#'} className="hover:text-blue-400 transition-colors duration-200">
                    <span className="absolute inset-0" />
                    {item.title}
                  </a>
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
                <a href={item.href ?? '#'} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
                  Read more <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
=======
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
>>>>>>> origin/feat/updates-and-home-whats-new
        </div>
=======
  description: 'Latest courses, announcements, research, and releases from Zion Tech Group.',
}

export default function UpdatesPage() {
  const sorted = [...updates].sort((a, b) => (a.date < b.date ? 1 : -1))
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Updates</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Courses, announcements, research, and product releases.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {sorted.map((item) => (
          <article key={item.id} className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-2 text-xs text-blue-300">
              <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 ring-1 ring-inset ring-blue-500/20">{item.tag}</span>
              <time dateTime={item.date} className="text-gray-400">{new Date(item.date).toLocaleDateString()}</time>
            </div>
            <h2 className="mt-3 text-lg font-semibold leading-6 text-white">
              <a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
                <span className="absolute inset-0" />
                {item.title}
              </a>
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
            <a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
              Read more <span aria-hidden="true">→</span>
            </a>
          </article>
        ))}
>>>>>>> origin/feat/updates-content-and-advertising
      </div>
    </div>
  )
}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/feature/updates-content
=======
>>>>>>> origin/feat/updates-and-home-whats-new
=======
>>>>>>> origin/feat/updates-content-and-advertising
