import React from 'react'

export default function AutonomousFinanceOSPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Launch</span>
            <time dateTime="2025-09-15">{new Date('2025-09-15').toLocaleDateString()}</time>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Autonomous Finance OS (v1.0)
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Real-time cash visibility, autonomous close, and policy-as-code controls for finance teams operating at scale.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Why it matters</h2>
          <p>
            Finance functions are constrained by manual workflows and fragmented systems. Autonomous Finance OS introduces
            measurable automation with audit-ready guardrails and continuous controls.
          </p>

          <h2>Key capabilities</h2>
          <ul>
            <li>Streaming treasury dashboards with policy-based alerts</li>
            <li>Autonomous close orchestration with exception review queues</li>
            <li>Policy-as-code for approvals, thresholds, and segregation of duties</li>
            <li>Built-in evals, metrics, and incident workflows</li>
          </ul>

          <h2>Get a demo</h2>
          <p>
            See how Autonomous Finance OS can reduce cycle times while improving control effectiveness.
            <a href="/contact" className="text-blue-400 hover:text-blue-300"> Request a demo →</a>
          </p>
        </div>
      </div>
    </div>
  )
}
