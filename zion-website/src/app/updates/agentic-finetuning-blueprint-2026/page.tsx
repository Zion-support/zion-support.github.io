// @ts-nocheck

export default function AgenticFinetuningBlueprintPage() {
	return (
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
				<p className="text-sm text-blue-300">Guide</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Agentic Finetuning Blueprint (2026)</h1>
				<p className="mt-4 text-gray-300">Practical patterns to adapt agent behaviors safely with eval gates and telemetry.</p>
				<div className="mt-8 prose prose-invert max-w-none">
					<h2>Overview</h2>
					<p>
						This blueprint outlines a pragmatic approach to adjust agent policies and tool preferences
						without sacrificing safety or latency. It emphasizes continuous evaluation, guardrails, and
						real-time telemetry to validate improvements before broad rollout.
					</p>
					<h3>Key Elements</h3>
					<ul>
						<li>Offline evals to scope candidate policy changes</li>
						<li>Shadow testing with automatic rollback thresholds</li>
						<li>Cost-aware routing and safety gates</li>
						<li>Live dashboards and incident-ready alerting</li>
					</ul>
					<h3>Getting Started</h3>
					<ol>
						<li>Define success metrics and failure modes</li>
						<li>Instrument traces and red-team tests</li>
						<li>Run canaries with small traffic percentages</li>
						<li>Promote on meeting SLOs; otherwise auto-rollback</li>
					</ol>
					<p className="mt-6">For implementation guidance, contact us to review your production setup.</p>
				</div>
				<div className="mt-10">
					<a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to Updates →</a>
				</div>
			</div>
		</div>
	)
}

