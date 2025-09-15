import React from 'react'

export default function CustomerWinRetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <p className="text-sm text-gray-400">Customer Win • 2025-09-15</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white">Global retail autonomous fulfillment rollout</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Autonomous agents improved OTIF by 11% across 14 distribution centers with dynamic routing and batching.
        </p>
        <div className="mt-8 space-y-6 text-gray-300">
          <p>
            The rollout integrated demand forecasting, slotting, and last-mile orchestration with policy-as-code guardrails
            and observability. Incidents auto-remediated with sub-minute recovery paths.
          </p>
          <p>
            See the detailed story in our update: <a className="text-blue-400 hover:text-blue-300" href="/updates/autonomous-retail-fulfillment">Autonomous Retail Fulfillment →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

