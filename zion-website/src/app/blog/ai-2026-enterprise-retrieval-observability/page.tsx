import React from 'react'

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <p className="text-sm font-semibold text-purple-700">Blueprint</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">AI 2026: Enterprise Retrieval Observability</h1>
          <p className="mt-2 text-gray-600">End-to-end tracing, SLIs, and evals for reliable retrieval-augmented systems.</p>
        </header>
        <section className="prose prose-lg mt-8">
          <h2>Why Retrieval Observability</h2>
          <p>
            Retrieval-augmented systems power agents and copilots with fresh context. To ship reliably at scale, teams need
            visibility across the entire pipeline: query parsing, candidate generation, reranking, grounding, and answer rendering.
            This blueprint outlines practical instrumentation, SLIs, and continuous evals for enterprise readiness.
          </p>
          <h2>Key Signals</h2>
          <ul>
            <li>Query classification and intent confidence</li>
            <li>Recall@K and hit-rate for gold passages</li>
            <li>Reranker quality deltas and drift detection</li>
            <li>Groundedness and citation coverage</li>
            <li>End-to-end p50/p95 latency budgets per stage</li>
          </ul>
          <h2>Architecture</h2>
          <ol>
            <li>Structured tracing with spans for parse → retrieve → rerank → synthesize</li>
            <li>Feature store for query and retrieval features with TTL</li>
            <li>Offline eval harness with golden sets and canary traffic</li>
            <li>Dashboards with quality gates and alerts tied to SLIs</li>
          </ol>
          <h2>Outcomes</h2>
          <p>
            Teams ship faster with guardrails, detect regressions early, and maintain user trust with verifiable, grounded answers.
          </p>
        </section>
      </article>
    </div>
  )
}

