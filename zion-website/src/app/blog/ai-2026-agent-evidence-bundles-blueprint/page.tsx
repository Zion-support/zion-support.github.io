// @ts-nocheck
export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 2026: Agent Evidence Bundles — Blueprint</h1>
          <p className="text-gray-700 mb-6">
            Design evidence bundles that pair actions with provenance, policy checks, eval results,
            and approvals. Make audits fast and incident response objective with signed artifacts.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Core Artifacts</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Trace excerpts with tool inputs/outputs</li>
            <li>Policy-as-code decision logs and outcomes</li>
            <li>Objective eval scores and thresholds</li>
            <li>Approvals, budgets, and change tickets</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Rollout</h2>
          <p className="text-gray-700">
            Start with high-risk tools, capture minimal viable evidence, and iterate toward full
            lineage with retention policies and privacy controls.
          </p>
        </div>
      </section>
    </main>
  )
}

