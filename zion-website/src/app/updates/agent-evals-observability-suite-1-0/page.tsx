export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-28 pb-24 lg:px-8">
        <p className="text-sm font-semibold leading-6 text-blue-400">Launch</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Launch: Agent Evals & Observability Suite v1.0
        </h1>
        <p className="mt-2 text-gray-400">2025-09-15</p>
        <div className="prose prose-invert mt-8">
          <p>
            The Agent Evals & Observability Suite v1.0 unifies live evaluations, guardrail events,
            tracing, and cost/latency telemetry to operate production agents with confidence.
          </p>
          <h2>What’s included</h2>
          <ul>
            <li>Live eval pipelines with canaries and rollback-on-regression</li>
            <li>End-to-end tracing for prompts, tools, model routes, and retries</li>
            <li>Guardrail events with policy-as-code evidence bundles</li>
            <li>Dashboards for quality, latency, and cost budgets</li>
          </ul>
          <h2>Why it matters</h2>
          <p>
            Teams gain actionable visibility and automated safety nets to ship faster while
            maintaining reliability and compliance.
          </p>
          <p className="mt-8">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
              Talk to us
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

