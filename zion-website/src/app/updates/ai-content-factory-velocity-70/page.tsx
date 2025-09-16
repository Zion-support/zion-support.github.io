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

