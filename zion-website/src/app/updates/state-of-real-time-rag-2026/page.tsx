"use client"
import React from 'react'

export default function StateOfRealTimeRag2026() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 lg:px-8">
        <a href="/updates" className="text-sm text-blue-400 hover:text-blue-300">← All updates</a>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Report: State of Real-Time RAG 2026 (Preview)
        </h1>
        <p className="mt-3 text-gray-300">2025-09-15 · Report</p>
        <div className="mt-8 prose prose-invert prose-a:text-blue-400">
          <p>
            This preview covers the latest architectures and practices for delivering low-latency retrieval-augmented
            generation in production, including streaming pipelines, hybrid indexes, and eval frameworks.
          </p>
          <h3>Key Takeaways</h3>
          <ul>
            <li>Latency budgets across model, retrieval, and network layers</li>
            <li>Observability signals that matter for real-time RAG</li>
            <li>Evaluation harnesses for quality, grounding, and safety</li>
            <li>Reference architectures and cost considerations</li>
          </ul>
          <p>
            The full report will be available soon. Subscribe on the Updates page to be notified.
          </p>
        </div>
      </div>
    </div>
  )
}


export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Report: State of Real-Time RAG (2026 Preview)</h1>
          <p className="mt-2 text-gray-300">Benchmarks of streaming retrieval latency, hit rate, and quality across architectures.</p>
          <p className="mt-1 text-sm text-blue-400">2025-09-15</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <p>
            We benchmarked multiple real-time retrieval architectures including hybrid dense/sparse,
            vector-only, and cache-augmented pipelines. The report summarizes median and p95 latency,
            retrieval hit rate, and answer quality under realistic load and drift scenarios.
          </p>
          <h2>Key findings</h2>
          <ul>
            <li>Cache-augmented hybrid retrieval reduced p95 latency by up to 42%</li>
            <li>Freshness-aware indexing improved hit rate by 9–14% on dynamic corpora</li>
            <li>Guardrail filters minimally impacted latency when compiled to WASM</li>
          </ul>
          <h2>Download</h2>
          <p>
            Contact us for the full dataset and methodology or to run the suite on your stack.
          </p>
        </section>
      </article>
    </div>
  )
}

