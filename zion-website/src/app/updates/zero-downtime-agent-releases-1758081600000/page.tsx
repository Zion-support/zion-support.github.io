
// @ts-nocheck
export default function ZeroDowntimeAgentReleasesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <div className="text-xs text-blue-300">Guide • 2025-09-16</div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Guide: Zero‑Downtime Agent Releases</h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Canary and shadow releases for agent updates with eval gates, rollback plans, and signed evidence bundles.
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          <h2>Why it matters</h2>
          <p>
            Agent changes can introduce unpredictable behavior. This guide shows how to de‑risk production updates using
            objective evaluation gates, staged rollouts, and policy‑as‑code guardrails.
          </p>
          <h2>Release patterns</h2>
          <ul>
            <li>Shadow releases gated by offline evals and policy checks</li>
            <li>Canary cohorts with automated rollback triggers</li>
            <li>Progressive exposure with live scorecards and alerts</li>
            <li>Evidence bundle signing for auditability</li>
          </ul>
          <h2>Implementation tips</h2>
          <p>
            Start with clear SLOs and evaluation rubrics. Instrument provenance capture and tie deployments to policy
            approvals with transparent exceptions.
          </p>
        </div>
        <div className="mt-10">
          <a href="/updates" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

