import React from 'react'

export default function AgentPlatformOperationsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Agent Platform Operations (2026)
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          SLOs, incident response, and eval-driven change management to run agent platforms at scale.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What this guide covers</h2>
          <ul>
            <li>Service-level indicators for agent reliability</li>
            <li>On-call playbooks and safe-mode fallbacks</li>
            <li>Eval-gated rollouts and change management</li>
            <li>Observability and incident postmortems</li>
          </ul>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400">Request the full guide →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

