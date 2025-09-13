import React from 'react';

export default function EnterpriseRAG2025BlueprintPage() {
  return (
    <div className='min-h-screen bg-white'>
      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-10'>
          <h1 className='text-4xl font-bold text-gray-900 mb-3'>
            Enterprise RAG in 2025: A Practical Blueprint
          </h1>
          <p className='text-gray-600'>Published: 2025-09-11 • 10 min read • AI Engineering</p>
        </header>

        <p className='text-lg text-gray-700 mb-6'>
          Retrieval-Augmented Generation (RAG) remains the most reliable pattern for enterprise knowledge tasks. This blueprint
          focuses on data governance, latency, and cost so you can deploy safely at scale.
        </p>

        <h2 className='text-2xl font-semibold text-gray-900 mt-10 mb-4'>Reference Architecture</h2>
        <ul className='list-disc pl-6 text-gray-700 space-y-2'>
          <li>Ingestion pipeline with PII scrubbing, deduplication, and semantic chunking.</li>
          <li>Dual index: keyword for recall, vector for precision. Rerank for quality.</li>
          <li>Guardrails for prompt injection, tool use, and outbound actions.</li>
          <li>Observability: per-request cost, latency, retrieval hit rate, answer quality.</li>
        </ul>

        <h2 className='text-2xl font-semibold text-gray-900 mt-10 mb-4'>Quality Controls</h2>
        <p className='text-gray-700 mb-4'>
          Use golden question sets and weak-supervision checks to prevent regressions. Track groundedness and citation coverage.
        </p>

        <h2 className='text-2xl font-semibold text-gray-900 mt-10 mb-4'>Operations & Cost</h2>
        <p className='text-gray-700 mb-4'>
          Batch embeddings, compress vectors, and select smaller models for reranking. Cache aggressively and cap budgets per request.
        </p>

        <footer className='mt-12 pt-6 border-t border-gray-200 text-gray-600'>
          Need a production review of your RAG system? Email kleber@ziontechgroup.com.
        </footer>
      </article>
    </div>
  );
}

