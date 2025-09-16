// @ts-nocheck
import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm text-blue-300">Guide • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Evals‑in‑Prod Control Plane (2026)</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Blueprint for centralizing evaluation gates, rollout policies, and evidence bundles across environments
          with standardized scorecards and automated enforcement.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Key Components</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Policy-as-code gates with risk tiers</li>
              <li>Live eval overlays and incident drill‑downs</li>
              <li>Signed evidence bundles and lineage tracking</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

// @ts-nocheck

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-blue-300">Guide · 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Evals‑in‑Prod Control Plane (2026)</h1>
        <p className="mt-4 text-lg text-gray-300">Blueprint for live evals, policy gates, and evidence bundles across environments.</p>

        <div className="mt-8 space-y-6 text-gray-300">
          <p>Centralize evaluation policies, rollout criteria, and metric gates. Orchestrate canaries, automatic rollbacks, and scorecard publishing across services while maintaining auditable evidence for decisions.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unified policy registry and metric thresholds</li>
            <li>Canary cohorts and progressive delivery with guardrails</li>
            <li>Signed evidence bundles and lineage for change approval</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

