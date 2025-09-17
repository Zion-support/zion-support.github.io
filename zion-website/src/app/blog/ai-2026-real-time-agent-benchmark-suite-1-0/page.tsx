export const metadata = {
	title: 'AI 2026: Real‑Time Agent Benchmark Suite v1.0 — Launch',
	description: 'Scenario‑driven, low‑latency benchmarks with eval gates and production‑like traces.',
}

export default function Page() {
	return (
		<main className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
			<header className="mb-8">
				<p className="text-sm font-semibold text-blue-500">Launch • September 2025</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">AI 2026: Real‑Time Agent Benchmark Suite v1.0 — Launch</h1>
				<p className="mt-3 text-gray-300">A practical benchmark harness to measure agent quality, safety, and latency against production‑like workloads and constraints.</p>
			</header>

			<article className="prose prose-invert prose-blue max-w-none">
				<h2>What’s Included</h2>
				<ul>
					<li>Scenario library with task difficulty labels and expected outcomes</li>
					<li>Latency budgeting and tail‑latency tracking for real‑time workloads</li>
					<li>Guardrail checks: groundedness, tool‑use safety, and policy events</li>
					<li>Cost telemetry with budgets and enforcement options</li>
					<li>CI/CD integration and runtime canary mode</li>
				</ul>

				<h2>How to Adopt</h2>
				<ol>
					<li>Instrument agents to emit structured traces and guardrail events</li>
					<li>Configure scenarios and thresholds per product line</li>
					<li>Wire gates to block unsafe or regressive releases</li>
					<li>Automate weekly reports and track trends over time</li>
				</ol>

				<h2>Benefits</h2>
				<p>Teams compare models, routes, and tools objectively; iterate faster with clear signals; and keep reliability and costs within budget.</p>
			</article>

			<div className="mt-10 flex flex-wrap gap-3">
				<a href="/updates/real-time-agent-benchmark-suite-1-0" className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500">Updates</a>
				<a href="/blog/ai-2026-real-time-model-routing-playbook" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20">Model Routing Playbook</a>
			</div>
		</main>
	)
}

