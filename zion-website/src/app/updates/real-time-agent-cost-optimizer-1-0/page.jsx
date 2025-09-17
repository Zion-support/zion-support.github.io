import React from 'react'

export default function RealTimeAgentCostOptimizerPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mb-4">
          <span className="inline-flex items-center rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-400 ring-1 ring-inset ring-cyan-500/20">
            Release
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Real-Time Agent Cost Optimizer v1.0</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Automated routing and dynamic budgets to reduce agent inference costs by 27%.
        </p>
        <div className="mt-8 prose prose-invert">
          <h2>Highlights</h2>
          <ul>
            <li>Dynamic policy-based routing across models and providers</li>
            <li>Budget-aware fallbacks with quality SLOs and guardrails</li>
            <li>Real-time cost and latency telemetry</li>
            <li>Plug-in evaluators for quality and safety</li>
          </ul>
          <h2>Try it</h2>
          <p>
            Contact us to schedule a demo and receive deployment guides.
          </p>
        </div>
      </div>
    </div>
  )
}

