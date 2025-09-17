export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mb-6 text-xs text-gray-400">
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300">Launch</span>
          <span className="ml-3">2025-09-15</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Real-Time Agent Cost Controller v1.0</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Continuous cost monitoring, dynamic budgets, and evaluation‑gated routing to reduce spend safely
          without sacrificing quality or latency.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            The Real‑Time Agent Cost Controller provides live cost telemetry for prompts, tools, and model routes.
            It enforces dynamic budgets per route, per user, and per environment, and integrates with evaluation signals
            to ensure cost reductions do not degrade quality.
          </p>
          <h2 className="text-xl font-semibold text-white">Highlights</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Live per‑request cost tracing with route and tool attribution</li>
            <li>Budget policies with soft and hard limits, exemptions, and approvals</li>
            <li>Eval‑gated routing to switch models when cost or quality thresholds are breached</li>
            <li>Signed evidence bundles for audits and finance reviews</li>
          </ul>
          <h2 className="text-xl font-semibold text-white mt-8">Get Started</h2>
          <p>
            Contact us to enable the Cost Controller in your environment and wire budgets into your routing layer.
            See also the blueprint on evaluation‑driven FinOps.
          </p>
          <div className="mt-6">
            <a href="/updates/evaluation-driven-finops" className="text-blue-400 hover:text-blue-300 font-semibold">Read: Evaluation‑Driven FinOps →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

