import React from 'react'

export default function AutonomousSupportCopilot11Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <div className="mb-4 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-fuchsia-500/10 px-2 py-0.5 text-fuchsia-300">Product</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Autonomous Support Copilot v1.1</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Upgraded support copilot with retrieval observability, safe tool use, and faster resolutions.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Highlights</h2>
          <ul>
            <li>Grounded answers with live source citations</li>
            <li>Guardrailed tool use with permission tiers</li>
            <li>Faster triage with incident-aware context stitching</li>
          </ul>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400 hover:text-blue-300">See it in action →</a>
          </p>
        </div>
      </div>
    </div>
  )
}
