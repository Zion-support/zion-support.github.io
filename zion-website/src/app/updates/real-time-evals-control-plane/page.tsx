import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Real-Time Evals Control Plane
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-16</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Centralize eval gates, rollout policies, and live scorecards across services. The
            control plane standardizes guardrail checks and enables continuous verification for
            prompts, tools, and workflows in production.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ul className="list-disc pl-6 space-y-2">
              <li>Global policy registry and reusable eval suites</li>
              <li>Scored gates for deploy, canary, and rollback workflows</li>
              <li>Live SLO dashboards with error budgets and drift alerts</li>
              <li>Pluggable runners for offline, shadow, and in‑prod evals</li>
              <li>APIs for custom metrics and evidence uploads</li>
            </ul>
            <p>
              Bring consistency and speed to your AI delivery with a unified control plane for
              evals and guardrails.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200"
            >
              Talk to an expert
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'

export const metadata = {
	title: 'Real-Time Evals Control Plane — Guide',
	description:
		'Centralize eval gates, rollout policies, and live scorecards across services.',
}

export default function Page() {
	return (
		<main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
			<h1 className="text-3xl sm:text-4xl font-bold text-white">Real-Time Evals Control Plane</h1>
			<p className="mt-4 text-lg text-gray-300">
				Design an organization-wide control plane for live eval gates, policy routing, and
				progressive delivery with measurable quality safeguards.
			</p>

			<section className="mt-10 space-y-6">
				<h2 className="text-2xl font-semibold text-white">What You Will Build</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Unified registry of evals with versioning and ownership.</li>
					<li>Gating policies applied per service, environment, and traffic segment.</li>
					<li>Live scorecards and SLO-aligned rollout controls.</li>
					<li>Evidence export for audits and incident reviews.</li>
				</ul>
			</section>

			<section className="mt-10 space-y-4">
				<h2 className="text-2xl font-semibold text-white">Next Steps</h2>
				<p className="text-gray-300">
					Start by mapping current eval coverage, define SLO thresholds, and integrate
					gates into your deployment pipeline.
				</p>
			</section>
		</main>
	)
}
