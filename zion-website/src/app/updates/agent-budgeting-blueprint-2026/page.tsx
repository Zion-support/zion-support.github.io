export default function AgentBudgetingBlueprint2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24 lg:px-8">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Blueprint</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Blueprint: Agent Budgeting & Cost Controls (2026)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Set budgets, enforce spend guardrails, and route by cost–quality tradeoffs with exportable audit evidence.
          This blueprint outlines controls to keep agent operations safe, fast, and cost‑efficient in production.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What’s Inside</h2>
          <ul>
            <li>Budget policies and quota types (per user, per route, per environment)</li>
            <li>Live cost telemetry with eval signals and SLO adherence</li>
            <li>Cost‑aware model routing with fallback rules and abort switches</li>
            <li>Signed evidence bundles for reviews and audits</li>
          </ul>
          <h2 className="mt-8">Getting Started</h2>
          <p>
            Begin with read‑only telemetry, then enable soft budgets before enforcing hard limits. Wire policies into
            CI/CD and runtime with canary evals to prevent regressions.
          </p>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Request implementation guidance →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

