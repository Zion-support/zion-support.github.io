export default function PlatformReadinessChecklist() {
  return (
    <div className="min-h-screen bg-black">
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <p className="text-sm text-gray-400">September 15, 2025 · Report</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">
              AI 2026 Platform Readiness Checklist
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              An engineer-ready checklist across data, governance, evaluations, and observability to ship enterprise AI safely.
            </p>
          </header>

          <section className="prose prose-invert prose-lg max-w-none">
            <h2>Checklist Categories</h2>
            <ul>
              <li>Data readiness: lineage, quality SLAs, and governed access.</li>
              <li>Governance: policy-as-code, approvals, and exception workflows.</li>
              <li>Evals: offline suites, canary gates, and rollback rules.</li>
              <li>Observability: traces, guardrail events, and budget dashboards.</li>
              <li>Security: secrets, permissions, and red-team drills.</li>
            </ul>

            <h3>How to Use</h3>
            <p>
              Adopt iteratively. Start with high-impact gaps, implement controls, and wire live evals into CI/CD. Export evidence for audits.
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}

