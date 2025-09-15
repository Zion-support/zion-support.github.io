import React from 'react'

export const metadata = {
	title: 'Updates | Zion Tech Group',
	description: 'Latest courses, announcements, and product updates from Zion Tech Group.'
}

export default function UpdatesPage() {
	const updates = [
		{
			title: 'New Course: Advanced Blockchain Development',
			date: '2025-09-15',
			summary:
				'Comprehensive blockchain course covering smart contracts, DeFi, L2 scaling, and security.',
			href: '/updates#advanced-blockchain-course'
		},
		{
			title: 'Community Challenge: Build a DApp',
			date: '2025-09-10',
			summary: 'Join our DApp challenge and win prizes up to $1000 in ZION tokens.',
			href: '/updates#dapp-challenge'
		},
		{
			title: 'Learning Path: Web3 Fundamentals',
			date: '2025-09-01',
			summary: 'Beginner-friendly path covering blockchain basics, NFTs, and Web3 security.',
			href: '/updates#web3-fundamentals'
		}
	]

	return (
		<div className="bg-black">
			<div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
				<header className="mx-auto max-w-2xl lg:text-center">
					<p className="text-base font-semibold leading-7 text-blue-400">Zion Academy</p>
					<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Latest Updates</h1>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						Explore our newest courses, community events, and platform announcements.
					</p>
				</header>

				<section className="mx-auto mt-12 max-w-2xl lg:mt-16 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
						{updates.map((item) => (
							<article
								key={item.title}
								className="flex flex-col items-start bg-white/5 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
							>
								<h3 className="text-lg font-semibold leading-6 text-white">
									<a href={item.href} className="hover:text-blue-400 transition-colors duration-200">
										<span className="absolute inset-0" />
										{item.title}
									</a>
								</h3>
								<p className="mt-1 text-xs text-gray-400">{item.date}</p>
								<p className="mt-3 text-sm leading-6 text-gray-300">{item.summary}</p>
								<a href={item.href} className="mt-6 text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
									Read more <span aria-hidden="true">→</span>
								</a>
							</article>
						))}
					</div>
				</section>

				<section className="mx-auto mt-24 max-w-3xl lg:mt-28" id="advanced-blockchain-course">
					<h2 className="text-2xl font-bold tracking-tight text-white">Advanced Blockchain Development</h2>
					<p className="mt-4 text-gray-300">
						Dive deep into Solidity, smart contract security, L2s, cross-chain messaging, and advanced design patterns.
					</p>
				</section>

				<section className="mx-auto mt-16 max-w-3xl" id="dapp-challenge">
					<h2 className="text-2xl font-bold tracking-tight text-white">Community DApp Challenge</h2>
					<p className="mt-4 text-gray-300">Showcase your DApp and compete for ZION token prizes.</p>
				</section>

				<section className="mx-auto mt-16 max-w-3xl" id="web3-fundamentals">
					<h2 className="text-2xl font-bold tracking-tight text-white">Web3 Fundamentals Path</h2>
					<p className="mt-4 text-gray-300">
						A curated learning path to quickly get productive with Web3.
					</p>
				</section>
			</div>
		</div>
	)
}