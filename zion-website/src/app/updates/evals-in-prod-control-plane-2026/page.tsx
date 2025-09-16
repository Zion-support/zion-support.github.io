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

