export default function RealTimeModelRoutingPlaybook2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Blueprint • 2025-09-16</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Blueprint: Real‑Time Model Routing Playbook (2026)</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Practical patterns to route requests across models in real time with budgeted quality,
            latency SLOs, and guardrail policies, backed by eval gates and signed evidence.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <h2>Overview</h2>
          <p>
            This playbook describes strategies to dynamically choose models and tools at runtime based on
            objective signals. It emphasizes safe degradations and auditable decisions via evidence bundles.
          </p>
          <h2>Key patterns</h2>
          <ul>
            <li>Latency‑aware routing with SLO thresholds and fallbacks</li>
            <li>Quality‑budget trade‑offs using evaluation scorecards</li>
            <li>Cost‑aware routing with per‑request budgeting</li>
            <li>Guardrails and policy‑as‑code checks at decision points</li>
          </ul>
          <h2>Getting started</h2>
          <p>
            Define routing objectives and constraints, configure metrics and eval signals, then roll out
            incrementally with canaries and shadow tests. Capture evidence to verify outcomes.
          </p>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}
