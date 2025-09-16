import React from 'react'

export default function AutonomousOpsSREForAgentsUpdate() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Launch</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Autonomous Ops and SRE for Agents</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          We are launching our operational framework for running autonomous agents with reliability engineering discipline:
          guardrails, service level objectives, and actionable runbooks.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <ul className="list-disc list-inside space-y-2">
            <li>Policy-as-code guardrails and quality gates</li>
            <li>Domain-specific SLOs and evaluation-driven releases</li>
            <li>Incident runbooks with safe-mode fallbacks</li>
            <li>Cost and latency budgets with adaptive routing</li>
          </ul>
          <p>
            Get a tailored workshop and blueprint for your environment.
          </p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Request a workshop →
          </a>
        </div>
      </div>
    </div>
  )
}

