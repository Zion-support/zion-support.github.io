import React from 'react'

export default function EnterpriseAgentObservabilityPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Enterprise Agent Observability
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Traces, evals, and safety telemetry to operate autonomous agents in production environments.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Key topics</h2>
          <ul>
            <li>Tracing and structured telemetry for agents</li>
            <li>Scenario-based eval signals and SLOs</li>
            <li>Debug tooling, red-team events, and replay</li>
            <li>Dashboards and alerting for safe operations</li>
          </ul>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400">See a live demo →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

