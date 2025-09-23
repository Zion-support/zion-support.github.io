import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <article className="max-w-3xl mx-auto px-6 py-24">
        <header>
          <h1 className="text-4xl font-bold text-white">Case Study: 27% Latency Reduction with Hybrid Retrieval</h1>
          <p className="mt-2 text-gray-300">Combining dense and symbolic retrieval reduced P95 latency while improving answer faithfulness.</p>
        </header>
        <section className="prose prose-lg prose-invert mt-8">
          <h2>Results</h2>
          <ul>
            <li>27% reduction in P95 query latency</li>
            <li>+8 points on groundedness evals</li>
            <li>Lower model usage cost via selective re-ranking</li>
          </ul>
          <h2>Approach</h2>
          <p>
            We layered BM25 with dense embeddings and lightweight re-ranking, instrumented retrieval telemetry, and used canary
            evals to validate performance before rollout.
          </p>
        </section>
      </article>
    </div>
  )
}

