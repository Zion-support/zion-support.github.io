import Link from 'next/link'

export default function PlatformReadinessBlueprint() {
  return (
    <div className="min-h-screen bg-white">
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <p className="text-sm text-gray-500">September 15, 2025 · 8 min read</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
              AI 2026: Platform Readiness — Blueprint
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              A concise blueprint to reach production readiness across data, governance, evaluations, and observability—
              with practical controls you can implement this quarter.
            </p>
          </header>

          <section className="prose prose-lg prose-slate max-w-none">
            <h2>Four Pillars</h2>
            <ol>
              <li><strong>Data</strong>: lineage, freshness SLIs, governed access, and privacy tiers.</li>
              <li><strong>Governance</strong>: policy-as-code, approvals, exceptions, and audit evidence.</li>
              <li><strong>Evals</strong>: offline suites, CI gates, shadow tests, and rollback policies.</li>
              <li><strong>Observability</strong>: traces, guardrail events, and budget dashboards.</li>
            </ol>

            <h3>Rollout Strategy</h3>
            <ul>
              <li>Baseline with a readiness score and top gaps.</li>
              <li>Prioritize high-risk gaps with measurable controls.</li>
              <li>Automate checks in CI/CD and runtime.</li>
              <li>Publish evidence bundles for audits and reviews.</li>
            </ul>

            <p className="mt-6">
              See the companion report for a downloadable checklist: <Link href="/updates/ai-2026-platform-readiness-checklist" className="text-purple-600">AI 2026 Platform Readiness Checklist</Link>.
            </p>
          </section>

          <footer className="mt-12 border-t pt-6">
            <Link href="/blog" className="text-purple-600 font-semibold">← Back to blog</Link>
          </footer>
        </div>
      </article>
    </div>
  )
}

