import React from 'react'

export default function RealTimeRetrievalArchitectures2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Blueprint</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Real-Time Retrieval Architectures (2026)</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Design patterns for low-latency hybrid retrieval powering agentic systems and copilots. We cover
          query planning, vector-augmented inverted indexes, streaming chunkers, and freshness-aware caches.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <p>
            This blueprint provides reference diagrams and latency budgets for sub-200ms retrieval at p95 across
            heterogeneous corpora, with fallbacks and guardrails that keep responses safe and grounded.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Hybrid retrieval orchestration with query analyzers</li>
            <li>Freshness and invalidation strategies for streaming content</li>
            <li>Observability with per-step spans and quality signals</li>
            <li>Cost-aware tiering and autoscaling patterns</li>
          </ul>
          <p>
            Get the full blueprint and architecture review tailored to your stack.
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

