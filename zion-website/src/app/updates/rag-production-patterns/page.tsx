import React from 'react'

export default function RAGProductionPatternsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="mx-auto max-w-3xl px-6 pt-24 pb-24">
        <p className="text-sm text-blue-300">Guide • 2025-09-15</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          RAG Production Patterns (2025 Edition)
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-300">
          Architecture and operational playbooks for reliable retrieval-augmented generation in production.
        </p>
        <div className="mt-8 prose prose-invert prose-lg max-w-none">
          <p>
            This guide covers end-to-end patterns for building robust RAG systems, including indexing strategies,
            hybrid retrieval, cache orchestration, evals, and observability. It also includes SLIs/SLOs and incident
            response for AI systems.
          </p>
          <h2>Highlights</h2>
          <ul>
            <li>Chunking and metadata schemas that actually work</li>
            <li>Retriever composition and fallback strategies</li>
            <li>Grounded generation with guardrails</li>
            <li>Production evals and regressions prevention</li>
          </ul>
          <p className="mt-6">
            <a href="/contact" className="text-blue-400">Request the full guide →</a>
          </p>
        </div>
      </div>
    </div>
  )
}

