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


