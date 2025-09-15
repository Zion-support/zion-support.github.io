
export default function EvalDrivenReleaseManagement() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-purple-300">Blueprint</span>
            <time dateTime="2025-09-15">{new Date('2025-09-15').toLocaleDateString()}</time>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Eval-Driven Release Management
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Use eval gates, canary cohorts, and rollback budgets to ship safely and continuously improve quality,
            latency, and cost.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Core practices</h2>
          <ul>
            <li>Block risky changes behind policy-defined eval thresholds</li>
            <li>Shadow traffic and canaries with automated analysis</li>
            <li>Explicit rollback budgets tied to SLIs and error budgets</li>
            <li>Continuous learning with counterfactual evals</li>
          </ul>

          <h2>Toolkit</h2>
          <p>Starter policies, dashboards, and runbooks to operationalize eval-driven releases.</p>
        </div>
      </div>
    </div>
  )
}

