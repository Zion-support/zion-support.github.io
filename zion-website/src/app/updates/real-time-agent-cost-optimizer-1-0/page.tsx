import React from 'react'

export const metadata = {
  title: 'Real-Time Agent Cost Optimizer v1.0 — Launch',
  description:
    'Automated routing, dynamic budgets, and live eval gates to reduce inference costs while preserving quality.',
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-gray-200">
      <h1 className="text-3xl sm:text-4xl font-bold text-white">Real-Time Agent Cost Optimizer v1.0</h1>
      <p className="mt-4 text-lg text-gray-300">
        Cut agent inference costs by up to 27% with dynamic provider routing, token budgets, and quality-preserving
        guardrails. Ship with confidence using eval-gated rollouts and signed evidence.
      </p>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold text-white">Highlights</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Cost-aware routing with latency and quality constraints.</li>
          <li>Real-time budgets by team, service, and environment.</li>
          <li>Evidence bundles for finance and compliance review.</li>
          <li>Native dashboards for drift, quality, and spend anomalies.</li>
        </ul>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold text-white">Getting Started</h2>
        <p className="text-gray-300">
          Define routing policies, attach eval gates, and enable cost telemetry export to your data warehouse for
          cross-functional visibility.
        </p>
      </section>
    </main>
  )
}

export default function RealTimeAgentCostOptimizer10() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Launch: Real-Time Agent Cost Optimizer v1.0</h1>
          <p className="text-gray-600 mb-8">Automated routing and dynamic budgets to reduce agent inference costs by 27%.</p>
          <div className="prose prose-gray max-w-none">
            <h2>What’s New</h2>
            <ul>
              <li>Latency/quality-aware model routing</li>
              <li>Budget guardrails with real-time enforcement</li>
              <li>Live cost dashboards and alerts</li>
            </ul>
            <h3>Getting Started</h3>
            <ol>
              <li>Define budget thresholds and SLIs</li>
              <li>Enable routing policy and evaluation hooks</li>
              <li>Monitor savings in the analytics dashboard</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}

