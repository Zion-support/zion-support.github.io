import React from 'react'

export default function AgentObservabilityBlueprint2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-xs text-blue-300">Guide • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Agent Observability Blueprint (2026)
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          End-to-end traces, SLIs/SLOs, eval overlays, and evidence bundles purpose-built for
          autonomous agents in production. This blueprint outlines a practical reference
          architecture and the key metrics to monitor reliability and safety.
        </p>
        <div className="mt-10 grid gap-6">
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">What’s inside</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Trace model: actions, tools, memory, and external effects</li>
              <li>Key SLIs/SLOs: latency, cost, quality, incident rate</li>
              <li>Eval overlays and rollout gates with policy-as-code</li>
              <li>Evidence bundles and audit-ready lineage</li>
              <li>Dashboards for engineering and executive stakeholders</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 text-gray-200">
            <h2 className="text-xl font-semibold text-white">Outcomes</h2>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-gray-300">
              <li>Faster incident triage with trace diffs and eval context</li>
              <li>Higher reliability via SLOs and safe rollbacks</li>
              <li>Provable compliance through signed evidence</li>
            </ul>
          </div>
          <a href="/updates" className="text-sm font-semibold text-blue-400 hover:text-blue-300">Back to updates →</a>
        </div>
      </div>
    </div>
  )
}

