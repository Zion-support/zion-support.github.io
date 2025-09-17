// @ts-nocheck

export default function AIEvalGatesCookbook2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Guide • 2025-09-16</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Guide: AI Eval Gates Cookbook (2026)</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Practical recipes for rollout gates, metric thresholds, and automated rollbacks in production.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <h2>Overview</h2>
          <p>
            This cookbook outlines repeatable patterns to introduce objective evaluation gates across CI/CD and runtime. It
            helps teams ship faster while maintaining quality, safety, and cost boundaries.
          </p>
          <h2>Recipes</h2>
          <ul>
            <li>Pre-merge canaries with quality and safety thresholds</li>
            <li>Shadow deploys with blast-radius limits and automatic rollbacks</li>
            <li>Latency and cost budgets enforced at the route and workflow level</li>
            <li>Evidence bundles and exception workflows for policy deviations</li>
          </ul>
          <h2>Quick start</h2>
          <p>
            Define metrics, wire gate checks into your pipeline, and stream outcomes to your observability stack to create
            visible, auditable guardrails for every change.
          </p>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

