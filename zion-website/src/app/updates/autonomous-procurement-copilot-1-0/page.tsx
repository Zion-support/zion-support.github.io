import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Launch: Autonomous Procurement Copilot (v1.0)</h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-15 · Launch</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Automate vendor sourcing, contract analysis, and purchase order workflows with policy-as-code guardrails, live cost benchmarks,
            and audit-ready trails. The Procurement Copilot integrates with ERP and sourcing platforms, providing retrieval-grounded answers
            and measurable quality, latency, and savings.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <h2 className="text-2xl font-semibold text-white">Key Capabilities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Automated RFP/RFQ generation with vendor matching and scoring rubrics</li>
              <li>Contract analysis with clause extraction, variance detection, and risk flags</li>
              <li>Policy-as-code guardrails for approvals and spend thresholds</li>
              <li>Live cost benchmarks and savings insights with evaluation gates</li>
              <li>Seamless ERP integration (SAP/Oracle/NetSuite) with observability</li>
            </ul>
            <h2 className="text-2xl font-semibold text-white">Getting Started</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Connect your ERP and document repositories</li>
              <li>Import procurement policies and approval workflows</li>
              <li>Enable telemetry and evaluation gates for safe rollout</li>
            </ol>
          </div>
          <div className="mt-10 flex gap-4">
            <a href="/contact" className="inline-flex items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200">
              Talk to sales
            </a>
            <a href="/updates" className="inline-flex items-center text-blue-400 hover:text-blue-300">Back to Updates →</a>
          </div>
        </div>
      </div>
    </div>
  )
}

