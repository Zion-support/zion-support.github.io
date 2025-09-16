// @ts-nocheck

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm text-blue-300">Launch · 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Real‑Time Agent Cost Optimizer v2.0 — Deep Dive</h1>
        <p className="mt-4 text-lg text-gray-300">Architecture, KPIs, and rollout lessons from cost‑aware, eval‑gated routing in production.</p>

        <div className="mt-8 space-y-6 text-gray-300">
          <p>We explore the routing graph, budgeted quality controls, and token policies that drive predictable spend while preserving outcome quality. This deep dive includes rollout guardrails, live eval gating, and lessons learned at scale.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Budgeted quality and latency targets with live scorecards</li>
            <li>Eval‑gated route selection and fallback safety rails</li>
            <li>Visibility: per‑route KPIs, anomaly alerts, and trend analytics</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

