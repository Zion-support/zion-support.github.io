import React from 'react'

export default function UpdateDetailPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl py-12 lg:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Production-Ready RAG Patterns
          </h1>
          <p className="mt-2 text-sm text-blue-400">2025-09-10</p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Build reliable RAG systems with guardrails, caching, and observability. This guide covers
            architecture decisions, evaluation, and operational playbooks for scaling to production.
          </p>
          <div className="mt-10 space-y-6 text-gray-300">
            <ol className="list-decimal pl-6 space-y-2">
              <li>Chunking strategies and metadata design</li>
              <li>Retriever fusion and hybrid search</li>
              <li>Response validation and constrained decoding</li>
              <li>Evaluation harnesses and golden sets</li>
              <li>Tracing, metrics, and incident response</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

