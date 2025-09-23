import React from 'react'

export default function RetrievalLatencyPatternsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <p className="text-sm text-gray-300">Blueprint • 2025-09-15 • 7 min read</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Retrieval Latency Patterns for Sub-500ms Agents
        </h1>
        <div className="prose prose-invert prose-lg mt-8 max-w-none">
          <p>
            Delivering sub-500ms retrieval requires a layered strategy across precomputations, caches, hybrids, and
            streaming. This guide outlines practical patterns we use in production.
          </p>
          <h2>Key patterns</h2>
          <ul>
            <li>Warm result caches with TTLs bound to drift windows</li>
            <li>Hybrid retrieval: sparse+dense with early-exit scoring</li>
            <li>Bi-encoder prefilters with late cross-encoder re-rank</li>
            <li>Progressive streaming and speculative answers</li>
          </ul>
          <h2>SLIs and guardrails</h2>
          <p>
            Track tail latency (P95/P99), groundedness, and override rate. Gate deployments with live canaries.
          </p>
        </div>
      </div>
    </div>
  )
}

