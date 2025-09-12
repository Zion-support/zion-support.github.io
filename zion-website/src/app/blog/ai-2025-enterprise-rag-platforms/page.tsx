import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise RAG Platforms 2025: Architecture, Quality, and Ops | Zion Tech Group',
  description: 'How to design, evaluate, and operate enterprise-grade RAG platforms in 2025: data quality, retrieval, caching, safety, and cost controls.',
  keywords: 'RAG platforms, enterprise AI, retrieval augmented generation, AI quality, evaluation',
  openGraph: {
    title: 'Enterprise RAG Platforms 2025',
    description: 'Design, evaluate, and operate enterprise-grade RAG platforms: data quality, retrieval, caching, safety, cost.',
    type: 'article',
    publishedTime: '2025-09-12T00:00:00.000Z',
    authors: ['Zion Tech Group'],
    tags: ['AI', 'RAG', 'Platforms', 'Quality'],
  },
};

export default function EnterpriseRAGPlatforms2025() {
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
              Enterprise RAG Platforms 2025: Architecture, Quality, and Operations
            </h1>

            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div className="flex items-center"><span className="mr-2">👤</span> Zion Tech Group</div>
              <div className="flex items-center"><span className="mr-2">📅</span> September 12, 2025</div>
              <div className="flex items-center"><span className="mr-2">⏱️</span> 20 min read</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            RAG platforms have matured into enterprise capabilities. This guide covers platform architecture,
            knowledge curation, retrieval quality, caching, safety guardrails, and operational metrics so teams can
            deliver reliable, cost-aware experiences.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Reference Architecture</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Content ingestion and governance: dedupe, versioning, provenance, and policy labels</li>
            <li>Embedding and indexing: consistent pipelines, dimensionality choices, and refresh schedules</li>
            <li>Retrieval tier: hybrid search, reranking, query classification, and intent routing</li>
            <li>Answer generation: templates, tools, and safety checks with inline evaluations</li>
            <li>Observability and controls: tracing, quality metrics, budgets, and kill switches</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Quality and Evaluation</h3>
          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Golden sets with weak supervision and human adjudication</li>
              <li>Attribution and factuality checks with inline scoring</li>
              <li>Drift detection for embeddings and source content freshness</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Operational Guardrails</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Query and response privacy filters; PII redaction pre/post inference</li>
            <li>Runtime budgets with cache-first strategies and tiered retrieval</li>
            <li>Policy-as-code for allowed sources, citation requirements, and tool scopes</li>
          </ul>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need a RAG Platform Assessment?</h3>
            <p className="text-gray-700 mb-6">
              We evaluate retrieval quality, data governance, safety, and cost efficiency, and deliver a
              prioritized roadmap for improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center"
              >
                Talk to Experts
              </Link>
              <Link
                href="/case-studies"
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center"
              >
                See Case Studies
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

