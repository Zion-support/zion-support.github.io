import React from 'react'

export default function CostAwareRoutingLiveEvalsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Blueprint • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Cost-Aware Routing with Live Evals
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Combine offline evals with canary live tests to continuously optimize quality, latency, and cost.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Architecture</h2>
          <ul>
            <li>Offline baselines with golden sets</li>
            <li>Live canaries and rollback policies</li>
            <li>Multi-model gateways with guardrails</li>
          </ul>
          <h2>Outcomes</h2>
          <p>Reduce spend while sustaining quality and SLOs for production workloads.</p>
          <p>
            <a href="/contact" className="text-blue-400">Implement this pattern →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

