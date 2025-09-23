import React from 'react'

export default function EvaluatingRealWorldRagLatencyPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-gray-400">
          <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-300">Guide</span>
          <time dateTime="2025-09-15">September 15, 2025</time>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">Evaluating Real-World RAG Latency</h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Measure what matters in production: tail latency, retrieval hit rate, and answer quality. This
          guide covers practical instrumentation patterns, load generation, and dashboards to ensure
          your retrieval-augmented systems meet user expectations.
        </p>
        <div className="mt-10 space-y-6 text-gray-300">
          <ul className="list-disc list-inside space-y-2">
            <li>Instrument end-to-end spans for query, retrieval, and generation</li>
            <li>Track P50/P95/P99 latency with budget allocations per stage</li>
            <li>Monitor retrieval hit rate and groundedness with sampling</li>
            <li>Establish SLIs/SLOs and set alerting thresholds</li>
          </ul>
          <p>
            Includes a reference Grafana dashboard and a load generation recipe with k6 and Locust.
          </p>
        </div>
        <div className="mt-10">
          <a href="/contact" className="text-sm font-semibold leading-6 text-blue-400 hover:text-blue-300">
            Get the reference dashboard →
          </a>
        </div>
      </div>
    </div>
  )
}

