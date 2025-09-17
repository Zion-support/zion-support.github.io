import React from 'react'

export default function EvalsControlPlanePage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Guide • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Evals‑in‑Prod Control Plane (2026)
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Blueprint for live evals, policy gates, and evidence bundles across environments.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>Core capabilities</h2>
          <ul>
            <li>Centralize metric gates and rollout policies</li>
            <li>Attach evidence bundles to every change</li>
            <li>Automate rollbacks with service‑level scorecards</li>
          </ul>
          <h2>Implementation notes</h2>
          <p>Start with critical paths first, then expand coverage based on incident learnings.</p>
          <p className="mt-6"><a className="text-blue-400" href="/contact">Get the reference architecture →</a></p>
        </div>
      </div>
    </div>
  )
}

