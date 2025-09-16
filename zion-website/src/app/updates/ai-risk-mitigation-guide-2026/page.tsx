import React from 'react'

export default function Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <p className="text-sm font-semibold text-blue-300">Guide</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          AI Risk Mitigation in Production (2026)
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Practical controls, eval gates, and incident playbooks for safe AI operations.
        </p>
        <div className="mt-10 prose prose-invert">
          <h2>Key controls</h2>
          <ul>
            <li>Pre-deploy eval gates with measurable rubrics</li>
            <li>Runtime policy checks and budget guardrails</li>
            <li>Tracing, metrics, and safety telemetry</li>
            <li>Incident response with causal analysis</li>
          </ul>
          <h2>Rollout checklist</h2>
          <ol>
            <li>Define SLIs/SLOs for quality, latency, and cost</li>
            <li>Integrate eval suites into CI/CD</li>
            <li>Enable runtime guardrails and alerts</li>
            <li>Establish incident runbooks and evidence capture</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

