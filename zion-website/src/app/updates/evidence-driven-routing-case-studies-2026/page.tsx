import React from 'react'

export default function EvidenceDrivenRoutingCaseStudies2026() {
	return (
		<div className="bg-black min-h-screen">
			<div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
				<h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Evidence‑Driven Routing Case Studies (2026)</h1>
				<p className="mt-4 text-lg leading-8 text-gray-300">
					How cost‑aware routing and evaluation gates deliver up to 48% cost savings while improving response quality.
				</p>
				<div className="mt-8 space-y-6 text-gray-300">
					<p>
						We present real deployments comparing naive routing against policies that factor confidence, latency, and cost.
					</p>
					<ul className="list-disc pl-6 space-y-2">
						<li>Model portfolios with fallback and speculative execution</li>
						<li>Eval gates enforcing quality bars before user delivery</li>
						<li>Budget‑aware routing balancing accuracy and spend</li>
						<li>Observed outcomes: cost, quality, and SLO adherence</li>
					</ul>
					<p>See also: <a className="text-blue-400 underline" href="/updates/real-time-model-routing-playbook-2026">Real‑Time Routing Playbook</a></p>
				</div>
			</div>
		</div>
	)
}

// @ts-nocheck
export default function EvidenceDrivenRoutingCaseStudies2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Case Studies</span>
          <time dateTime="2025-09-16">September 16, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Evidence‑Driven Routing: Case Studies (2026)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Real‑world outcomes from objective routing with evals, risk signals, and budget controls.
          These studies showcase measurable gains in quality, latency compliance, and cost efficiency.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            By instrumenting groundedness, uncertainty, and policy risk, teams routed traffic to the best model or
            fallback strategy per request. The result: fewer incidents, predictable spend, and higher satisfaction.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>48% cost reduction with cost-aware model routing at steady quality</li>
            <li>32% MTTR reduction via automated rollbacks triggered by eval gates</li>
            <li>p95 latency compliance improved from 86% to 97% with budget-aware fallbacks</li>
            <li>Hallucination rate cut by 41% using groundedness thresholds and guardrails</li>
          </ul>
          <p>
            Implement these patterns to align reliability and cost goals without sacrificing user experience.
          </p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Request a routing assessment →
          </a>
        </div>
      </div>
    </div>
  )
}
