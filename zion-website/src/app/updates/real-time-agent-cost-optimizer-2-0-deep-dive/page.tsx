import React from 'react'

export default function CostOptimizerDeepDivePage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Launch • 2025-09-16</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Real‑Time Agent Cost Optimizer v2.0 — Deep Dive
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Architecture, KPIs, and rollout lessons from cost‑aware, eval‑gated routing in production.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <h2>What’s inside</h2>
          <ul>
            <li>Live token budgeting with service‑level quality targets</li>
            <li>Evaluation gates for safe model downshifts and tool arbitration</li>
            <li>Observability overlays: latency, hit‑rate, and answer quality</li>
          </ul>
          <h2>Outcomes</h2>
          <p>Up to 28% cost reduction at constant satisfaction scores, with lower P95 latency.</p>
          <p className="mt-6"><a className="text-blue-400" href="/contact">Request the full playbook →</a></p>
        </div>
      </div>
    </div>
  )
}

