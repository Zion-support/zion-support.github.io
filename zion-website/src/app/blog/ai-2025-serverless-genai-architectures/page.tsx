import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Serverless GenAI Architectures (2025) | Zion Tech Group',
  description: 'Design event-driven GenAI: functions, queues, vector DBs, and evaluation guardrails on AWS/GCP/Azure.',
  keywords: 'serverless, GenAI, event-driven, vector database, evaluations, guardrails, architecture',
  openGraph: {
    title: 'Serverless GenAI Architectures (2025)',
    description: 'Event-driven GenAI with functions, queues, vector DBs, and eval guardrails.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['Architecture', 'Serverless', 'RAG'],
  },
};

export default function ServerlessGenAiArchitectures2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors"
            >
              <span className="h-4 w-4 mr-2">←</span>
              Back to Blog
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serverless GenAI Architectures (2025)
            </h1>

            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><span className="mr-2">👤</span> Zion Tech Group</div>
              <div className="flex items-center"><span className="mr-2">📅</span> September 12, 2025</div>
              <div className="flex items-center"><span className="mr-2">⏱️</span> 14 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Build scalable, cost‑efficient GenAI using serverless primitives. This guide covers event design,
            vector search, tool orchestration, and evaluation guardrails that keep systems reliable.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Reference Blueprint</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Events first: immutable facts, retries, and idempotency keys</li>
            <li>Functions: short‑lived orchestration and tool adapters</li>
            <li>Queues and streams: smoothing bursts and isolating failures</li>
            <li>Vector DB: hybrid search, rerankers, and chunk governance</li>
            <li>Guardrails: policy‑as‑code, red teaming harnesses, and online evals</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ops and Costs</h3>
          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Cold starts vs provisioned concurrency; regional placement</li>
              <li>Budget caps with step‑down strategies and cache tiers</li>
              <li>Tracing with spans across functions, queues, and vector queries</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Design Help</h3>
            <p className="text-gray-700 mb-6">
              We design and review serverless GenAI systems with concrete SLOs, safety, and cost targets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center"
              >
                Talk to Experts
              </Link>
              <Link
                href="/content-showcase"
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center"
              >
                Explore More Content
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

