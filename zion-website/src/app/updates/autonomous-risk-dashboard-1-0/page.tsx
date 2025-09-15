export default function AutonomousRiskDashboard() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Autonomous Risk Dashboard v1.0
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            The Autonomous Risk Dashboard unifies critical risk signals for AI systems, including
            override rates, groundedness scores, policy violations, and incident MTTR. It provides
            live drilldowns by service, dataset, and model, with exportable evidence bundles.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Real-time risk posture with trend charts and alerts</li>
            <li>Deep links to traces, evals, and guardrail events</li>
            <li>Policy-as-code status and exception workflows</li>
            <li>Signed, audit-ready evidence bundles</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Connect your telemetry sources and enable out-of-the-box dashboards. Our team can help
            tailor risk views to your environment.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Request a demo
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

