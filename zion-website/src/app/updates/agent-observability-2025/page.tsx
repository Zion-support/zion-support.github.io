import React from 'react'

export default function AgentObservability2025Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Report</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">State of Agent Observability (2025)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Benchmarks and best practices for tracing, metrics, and safety signals across autonomous agents.
          This report compares open-source and commercial stacks across latency overhead, signal fidelity, and ease of use.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <ul className="list-disc list-inside space-y-2">
            <li>Span schemas for tool use, retrieval, and policy checks</li>
            <li>Quality and safety signals that predict incident risk</li>
            <li>Production dashboards and SLO templates</li>
            <li>Sampling strategies and data retention guidance</li>
          </ul>
          <p>Download the full dataset and methodology from our research portal.</p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Request briefing →
          </a>
        </div>
      </div>
    </div>
  )
}

