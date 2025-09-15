import React from 'react'

export default function AIGovernanceMaturityModel2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Report</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">AI Governance Maturity Model (2026 Preview)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          A staged model to assess and improve AI governance across policy, controls, telemetry, and org operating
          rhythm. Includes scorecards and example roadmaps.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Levels</h2>
          <ol>
            <li>Ad-hoc: local policies, limited telemetry</li>
            <li>Defined: policy catalog, basic controls</li>
            <li>Managed: policy-as-code and SLIs</li>
            <li>Optimized: automated gates and continuous assurance</li>
          </ol>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Download the preview →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

