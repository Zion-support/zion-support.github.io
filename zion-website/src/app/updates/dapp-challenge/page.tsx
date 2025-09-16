import React from 'react'

export default function DappChallengePage() {
	return (
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
				<p className="text-sm text-blue-300">Challenge • 2025-09-05</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Community Challenge: Build a DApp</h1>
				<p className="mt-4 text-lg leading-8 text-gray-300">Join the DApp challenge and win prizes up to $1000 in ZION tokens.</p>
				<div className="mt-8 prose prose-invert prose-lg max-w-none">
					<h2>How it works</h2>
					<ol>
						<li>Register your team</li>
						<li>Submit your repo and demo</li>
						<li>Judging and awards</li>
					</ol>
					<p className="mt-6"><a className="text-blue-400" href="/contact">Register now →</a></p>
				</div>
			</div>
		</div>
	)
}

