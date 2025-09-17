export default function AgenticObservabilityBlueprint() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Blueprint</span>
          <time dateTime="2025-09-16">September 16, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Agentic Observability Blueprint</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A reference blueprint for end-to-end observability of autonomous agents: traces, metrics, logs, user
          signals, and policy events unified into a coherent telemetry fabric.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            Capture intent → tools → outcomes with causal links. Use distributed tracing to understand multi‑step
            reasoning, correlate cost to value, and detect regressions early with automated guardrails.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Spec: standard spans for plans, tool calls, and memory updates</li>
            <li>SLIs: override rate, violation rate, groundedness, and MTTR</li>
            <li>Dashboards: reliability scorecards and budget compliance views</li>
          </ul>
          <p>
            Use this blueprint to bootstrap reliable agent operations in production and accelerate audits with
            evidence-backed reports.
          </p>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Browse all updates →
          </a>
        </div>
      </div>
    </div>
  )
}

