import React from 'react'

export default function AgentReliabilityReport2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="mb-6 text-xs text-blue-300">
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 ring-1 ring-inset ring-blue-500/20">Report</span>
          <time dateTime="2025-09-16" className="ml-3 text-gray-400">9/16/2025</time>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">State of Agent Reliability (2026 Preview)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">Incident patterns, SLOs, and resilience tactics from large-scale agent systems.</p>
        <div className="prose prose-invert mt-8">
          <p>
            This preview distills findings from operating production agent systems across diverse workloads. We
            outline common failure modes, leading indicators, and practical guardrails to improve reliability
            while keeping cost and latency in check.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Evidence-driven SLOs aligned to business outcomes</li>
            <li>Live eval gates as change management controls</li>
            <li>Resilience patterns for tools, memory, and retrieval</li>
          </ul>
          <p>
            Explore our reliability blueprints and example dashboards to accelerate your readiness heading into 2026.
          </p>
        </div>
      </div>
    </div>
  )
}

