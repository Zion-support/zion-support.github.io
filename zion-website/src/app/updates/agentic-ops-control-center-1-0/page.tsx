
export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Launch: Agentic Ops Control Center (v1.0)</h1>
          <p className="mt-2 text-gray-300">Unified console for monitoring, guardrails, and live evals across agentic systems.</p>
          <p className="mt-1 text-sm text-blue-400">2025-09-15</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <p>
            The Agentic Ops Control Center provides a single pane of glass to operate autonomous
            agent systems safely and efficiently. It integrates tracing, metrics, safety signals,
            and real-time evaluations to give engineering and ops teams actionable visibility.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Unified observability across actions, tools, and retrieval chains</li>
            <li>Policy-as-code guardrails with live enforcement and audit trails</li>
            <li>Canary live evals to validate quality, latency, and cost before rollout</li>
            <li>Role-based access with least-privilege and granular approvals</li>
          </ul>
          <h2>Get started</h2>
          <p>
            Contact us to enable the control center in your environment and connect your first
            agent workloads.
          </p>
        </section>
        <div className="mt-10">
          <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors duration-200">
            Request a demo
          </a>
        </div>
      </article>
    </div>
  )
}

