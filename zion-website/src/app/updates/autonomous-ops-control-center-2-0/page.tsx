import React from 'react'

export default function AutonomousOpsControlCenter20Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-green-500/10 px-2 py-0.5 text-green-300">Launch</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Autonomous Ops Control Center 2.0</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Unified command center with live evals, automated guardrails, and incident workflows to safely operate
          autonomous agents at scale.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What&apos;s New</h2>
          <ul>
            <li>Live evaluation dashboards with quality, latency, and cost SLIs</li>
            <li>Policy-as-code guardrails with canary and rollback automation</li>
            <li>Incident workflows integrated with observability traces</li>
          </ul>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">Request a demo →</a>
          </p>
        </div>
      </div>
    </div>
  )
}
