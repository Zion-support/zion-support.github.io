// @ts-nocheck
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <p className="text-blue-400 font-semibold">Guide • 2025-09-16</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Evals‑in‑Prod Control Plane (2026)</h1>
        <p className="mt-4 text-gray-300">
          Blueprint for centralized evaluation gates, rollout policies, and evidence bundles across environments.
        </p>
        <div className="mt-8 space-y-4 text-gray-200 leading-7">
          <p>
            This guide outlines a reference architecture for managing evaluations as first‑class production controls.
            It covers policy assignment, risk tiers, exception flows, and audit‑ready evidence collection.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Centralized policy and eval registry with versioning</li>
            <li>Canary and shadow test orchestration with auto‑rollback gates</li>
            <li>Signed evidence bundles and lineage capture for audits</li>
          </ul>
          <p>
            Adopt incrementally by integrating with existing CI/CD and observability, then expand to organization‑wide guardrails.
          </p>
        </div>
        <a href="/updates" className="inline-block mt-10 rounded-md bg-blue-600 px-4 py-2 font-semibold hover:bg-blue-500">Back to updates →</a>
      </section>
    </main>
  )
}

