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

// @ts-nocheck

export const metadata = {
	title: '70% Content Velocity with AI Factory — Case Study',
	description:
		'How a content team scaled output safely with eval gates and guardrails.',
}

export default function Page() {
	return (
		<main className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 pt-24 pb-24 text-gray-200">
				<p className="text-sm text-blue-300">Case Study • 2025-09-16</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
					70% Content Velocity with AI Factory
				</h1>
				<p className="mt-4 text-lg leading-8 text-gray-300">
					A real-world rollout of an AI content factory that increased output while keeping quality
					and safety measurable.
				</p>
				<div className="mt-8 prose prose-invert prose-lg max-w-none">
					<h2>Outcomes</h2>
					<ul>
						<li>70% faster content throughput with consistent quality metrics</li>
						<li>Eval gates catching hallucinations and style drift</li>
						<li>Cost-aware routing across models and tools</li>
						<li>Human-in-the-loop reviews for high-impact assets</li>
					</ul>

					<h2>Implementation Notes</h2>
					<p>
						We combined retrieval-augmented templates, safety checks, and versioned prompts with
						continuous evaluation to scale safely.
					</p>

					<p>
						<a href="/contact" className="text-blue-400">Discuss a rollout →</a>
					</p>
				</div>
			</div>
		</main>
	)
}

