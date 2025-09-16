import React from 'react'

export const metadata = {
	title: '70% Content Velocity with AI Factory — Case Study',
	description:
		'How a content team scaled output safely using eval gates and guardrails.',
}

export default function Page() {
	return (
		<main className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 pt-24 pb-24 text-gray-200">
				<p className="text-sm text-blue-300">Case Study • 2025-09-16</p>
				<h1 className="mt-2 text-3xl sm:text-4xl font-bold text-white">70% Content Velocity with AI Factory</h1>
				<p className="mt-6 text-lg text-gray-300">
					A global team implemented eval gates, cost-aware routing, and safety guardrails to
					increase high-quality output while reducing review time.
				</p>
				<section className="mt-10 space-y-4">
					<h2 className="text-2xl font-semibold text-white">Results</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>70% increase in weekly published articles</li>
						<li>35% reduction in editorial cycle time</li>
						<li>Lower risk via automated policy checks and evidence logs</li>
					</ul>
				</section>
				<div className="mt-10">
					<a href="/updates" className="text-blue-400 hover:text-blue-300">Back to updates →</a>
				</div>
			</div>
		</main>
	)
}
