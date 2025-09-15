import React from 'react'

export default function AgentSafetyToolkitV1Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-green-300">Launch</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Agent Safety Toolkit (v1)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          End-to-end safety reviews, red-teaming templates, and policy-as-code checks to help teams ship safer
          agentic systems with confidence.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What you get</h2>
          <ul>
            <li>Design review checklists mapped to common failure modes</li>
            <li>Red-team scenarios and evaluation datasets</li>
            <li>Policy-as-code examples with automated gates</li>
            <li>Incident response guide and postmortem templates</li>
          </ul>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Request a briefing →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

