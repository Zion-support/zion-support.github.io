import React from 'react'

export default function AutoDataGovernanceV3Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Launch</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Autonomous Data Governance Suite (v3)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          End-to-end governance with policy-as-code, lineage, and real-time audit trails for AI systems.
          Version 3 introduces automated evidence generation, multi-cloud connectors, and AI safety attestations.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <ul className="list-disc list-inside space-y-2">
            <li>Policy-as-code templates for common AI workflows</li>
            <li>Automated lineage across datasets, prompts, and fine-tunes</li>
            <li>Continuous compliance with exportable audit packs</li>
            <li>Integration with SIEM and incident workflows</li>
          </ul>
          <p>Request a live demo and tailored rollout plan for your environment.</p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Book a demo →
          </a>
        </div>
      </div>
    </div>
  )
}

