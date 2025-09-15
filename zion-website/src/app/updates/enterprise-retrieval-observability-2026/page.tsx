import React from 'react'

export default function EnterpriseRetrievalObservability2026Page() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-300">Guide</span>
            <time dateTime="2025-09-15">{new Date('2025-09-15').toLocaleDateString()}</time>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Enterprise Retrieval Observability (2026)
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Define SLIs, trace retrieval behavior, and add eval gates to ensure production reliability for RAG systems.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>Core SLIs</h2>
          <ul>
            <li>Hit rate, groundedness, and coverage</li>
            <li>P95 latency and tail risk</li>
            <li>Freshness and index health</li>
          </ul>

          <h2>Tracing patterns</h2>
          <p>
            Capture query, retrieval, and generation spans with correlation IDs to diagnose variance and regressions.
          </p>

          <h2>Evals and gates</h2>
          <p>
            Pair offline suites with canary live evals and automatic rollback when SLIs breach thresholds.
          </p>
        </div>
      </div>
    </div>
  )
}

