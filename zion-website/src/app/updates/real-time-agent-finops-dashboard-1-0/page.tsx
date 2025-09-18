// @ts-nocheck
export default function RealTimeAgentFinOpsDashboardPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Launch • 2025-09-16</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Launch: Real‑Time Agent FinOps Dashboard v1.0</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Live spend, latency, and quality scorecards with budget alerts and routing controls for production agent systems.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <h2>Overview</h2>
          <p>
            The Real‑Time Agent FinOps Dashboard centralizes cost, latency, and quality signals to help teams make informed
            trade‑offs. It integrates with evaluation pipelines to budget for quality while enforcing spend guardrails.
          </p>
          <h2>Key capabilities</h2>
          <ul>
            <li>Live cost and token usage with per‑agent drill‑downs</li>
            <li>Latency and quality scorecards with SLO alignment</li>
            <li>Budget alerts and automated routing policy hooks</li>
            <li>Evidence bundles for audits and governance reviews</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Connect your observability and evaluation streams. Define budget thresholds and routing policies, then monitor
            outcomes in real‑time to optimize cost without sacrificing quality.
          </p>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

