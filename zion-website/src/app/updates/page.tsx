import React from 'react'

type UpdateItem = {
	title: string
	date: string
	summary: string
	id: string
}

const updates: UpdateItem[] = [
	{
		title: 'Launch: Advanced Blockchain Development Course',
		date: '2025-09-15',
		summary:
			'Deep-dive curriculum covering smart contracts, Solidity security, L2 scaling, and DeFi protocols with hands-on projects.',
		id: 'advanced-blockchain-development-course'
	},
	{
		title: 'Community Challenge: Build a DApp (Win ZION tokens)',
		date: '2025-09-12',
		summary:
			'Join our 3-week challenge to build and ship a production-ready decentralized app. Top teams share 5,000 ZION.',
		id: 'community-dapp-challenge'
	},
	{
		title: 'New Learning Path: Web3 Fundamentals',
		date: '2025-09-10',
		summary:
			'Beginner-friendly track introducing blockchain primitives, token standards, wallets, and Web3 security best practices.',
		id: 'web3-fundamentals-path'
	},
	{
		title: 'Release: AI Research Assistant v2.1',
		date: '2025-09-08',
		summary:
			'Improved retrieval quality, faster batch experiments, and notebook exports for reproducible research workflows.',
		id: 'ai-research-assistant-2-1'
	}
]

export default function UpdatesPage() {
	return (
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
				<header className="mb-10">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Updates</h1>
					<p className="mt-4 text-lg leading-8 text-gray-300">
						News, launches, and learning content from Zion Academy.
					</p>
				</header>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{updates.map((item) => (
						<article key={item.id} id={item.id} className="flex flex-col bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
							<time className="text-xs uppercase tracking-wide text-gray-400" dateTime={item.date}>
								{new Date(item.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
							</time>
							<h2 className="mt-2 text-lg font-semibold leading-6 text-white">{item.title}</h2>
							<p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
							<div className="mt-6">
								<a
									href={`#${item.id}`}
									className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300"
								>
									Permalink <span aria-hidden="true">→</span>
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}

