import React from 'react'

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-gray-900">AI 2026: Real-Time RAG Blueprint</h1>
          <p className="mt-2 text-gray-500">Architectures and evals for sub-second retrieval-augmented generation at scale.</p>
        </header>
        <section className="prose prose-lg mt-8">
          <p>
            Real-time retrieval-augmented generation enables interactive agents and copilots to ground responses with
            fresh, relevant context under strict latency budgets. This blueprint covers low-latency vector search,
            hybrid retrieval, caching strategies, and evaluation harnesses for quality and responsiveness.
          </p>
          <h2>Key components</h2>
          <ul>
            <li>Client-side prefetch and streaming token-by-token rendering</li>
            <li>Hybrid retrieval with vector + BM25 reranking</li>
            <li>Feature store and queryset caching with TTL and invalidation hooks</li>
            <li>Latency budgets per stage with tracing and SLIs</li>
          </ul>
          <h2>Evals</h2>
          <p>
            Track hit-rate@k, end-to-end p95 latency, groundedness, and answer helpfulness with continuous regression checks.
          </p>
        </section>
      </article>
    </div>
  )
}

