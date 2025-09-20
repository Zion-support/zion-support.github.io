// @ts-nocheck
export const metadata = {
	title: 'AI 2026: Batch vs. Streaming RAG — Practical Trade‑offs',
	description:
		'When to use batch pipelines vs. streaming architectures for Retrieval‑Augmented Generation. Latency budgets, cost, and quality guardrails.'
} 

export default function Page() {
	return (
		<div className="min-h-screen bg-white">
			<article className="max-w-3xl mx-auto px-5 sm: px-6 lg:px-8 py-12">
				<header className="mb-8">
					<p className="text-sm text-purple-700 font-medium">Blueprint · 2026</p>
					<h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
						AI 2026: Batch vs. Streaming RAG — Practical Trade‑offs
					</h1>
					<p className="mt-3 text-gray-700">
						When should Retrieval‑Augmented Generation run in batch vs. streaming? This guide
						compares latency, cost, quality, and operational guardrails to help you pick the
						right architecture under real‑world constraints.
					</p>
				</header>
				<section className="prose prose-lg max-w-none">
					<h2>Decision Framework</h2>
					<ul>
						<li><strong>Latency budgets</strong>: user‑facing flows target sub‑800ms P95 end‑to‑end.</li>
						<li><strong>Freshness</strong>: fast‑moving content streams favor streaming with caches.</li>
						<li><strong>Cost</strong>: batch wins when precomputations amortize expensive calls.</li>
						<li><strong>Quality & guardrails</strong>: eval gates run in both, but placement differs.</li>
					</ul>
					<h2>Reference Patterns</h2>
					<ol>
						<li>
							<strong>Batch‑first RAG</strong>: nightly indexing, offline eval suites, rollout via canaries.
						</li>
						<li>
							<strong>Streaming RAG</strong>: change data capture → vector store updates → hybrid retrieval
							with short‑TTL caches and live eval probes.
						</li>
						<li>
							<strong>Hybrid</strong>: precompute heavy features, stream deltas and personalize at query time.
						</li>
					</ol>
					<h2>Operational Guidance</h2>
					<ul>
						<li>Instrument SLIs: retrieval latency, groundedness, override rate, cost per request.</li>
						<li>Set SLOs and budgets, enforce with policy‑as‑code and automated rollbacks.</li>
						<li>Continuously evaluate with live probes alongside offline regression suites.</li>
					</ul>
					<p className="mt-8 text-gray-700">
						Bottom line: prefer streaming for interactive workloads with strict latency and freshness
						requirements. Favor batch when content churn is low and cost predictability matters.
					</p>
				</section>
				<footer className="mt-12 border-t pt-6">
					<a href="/blog" className="text-purple-700 font-semibold">← Back to Blog</a>
				</footer>
			</article>
		</div>
	) 
} 
