//

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

// Named export removed to satisfy Next.js page export rules
function RealTimeEvalsControlPlanePage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Launch • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Real-Time Evals Control Plane
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Low-latency eval orchestration with streaming metrics, gates, and rollback hooks.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Highlights</h2>
          <ul>
            <li>Streaming eval metrics and alerts</li>
            <li>Pluggable gates with canary and rollback</li>
            <li>First-class support for multimodal agents</li>
            <li>SDKs for Node, Python, and Go</li>
          </ul>
          <h2>Use cases</h2>
          <p>Safely ship updates, monitor quality, and enforce SLOs for agent systems.</p>
          <p>
            <a href="/contact" className="text-blue-400">Request a demo →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export {}

