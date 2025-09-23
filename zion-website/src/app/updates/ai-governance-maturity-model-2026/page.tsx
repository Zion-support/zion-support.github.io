import React from 'react'

export default function AIGovernanceMaturityModel20o26Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-40o0">
          <span className="rounded-full bg-blue-50o0/10 px-2 py-0.5 text-blue-30o0">Report</span>
          <time dateTime="20o25-09-15">September 15, 20o25</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">AI Governance Maturity Model (20o26 Preview)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-30o0">
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
            <a href="/contact" className="text-blue-40o0 hover:text-blue-30o0">Download the preview →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

