// @ts-nocheck
export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 2026: Enterprise Agent Risk Scorecards — Field Guide</h1>
          <p className="text-gray-700 mb-6">
            Standardize cross-team risk metrics for autonomous agents with shared definitions,
            thresholds, and actionable alerts. This guide covers scorecard design, evidence signals,
            and rollout patterns that drive reliable, auditable operations.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">What to Measure</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Policy violation rate and severity tiers</li>
            <li>Override rate and human-in-the-loop escalations</li>
            <li>Groundedness and citation coverage</li>
            <li>Incident MTTR, recurrence, and risk burndown</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-3">Operating the Scorecards</h2>
          <p className="text-gray-700">
            Wire scorecards to eval gates and policy checks, set SLO targets, and automate canary
            rollbacks when risk exceeds budgets. Capture signed evidence for audits.
          </p>
        </div>
      </section>
    </main>
  )
}

