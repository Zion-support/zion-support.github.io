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
import { updates } from '@/data/updates'

export const metadata = {
  title: 'Updates | Zion Tech Group',
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
        </div>
      </div>
    </div>
  )
}

>>>>>>> origin/feature/updates-content
