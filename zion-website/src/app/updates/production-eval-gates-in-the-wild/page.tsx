export default function ProductionEvalGatesInTheWild() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Deep Dive</span>
          <time dateTime="2025-09-16">September 16, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Production Eval Gates in the Wild</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          How leading teams implement evaluation gates across development, staging, and production to control quality,
          risk, and cost for AI systems. Learn proven patterns, thresholds, and rollback strategies.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            We examine objective metrics, budget policies, and escalation paths that keep AI changes safe while
            enabling rapid iteration. You will find examples of pre-merge checks, canary evals, and continuous
            monitoring tied to incident response.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Designing eval gates for accuracy, groundedness, and guardrail compliance</li>
            <li>Risk-tiered thresholds and evidence collection for approvals</li>
            <li>Automated rollbacks and incident drills triggered by SLO violations</li>
          </ul>
          <p>
            Adopt these patterns to reduce mean time to remediation, prevent regressions, and build trust with
            auditors and stakeholders.
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

