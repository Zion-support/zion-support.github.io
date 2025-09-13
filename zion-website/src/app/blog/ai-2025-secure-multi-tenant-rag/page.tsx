import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Secure Multi‑Tenant RAG in 2025: Architectures and Controls | Zion Tech Group',
  description: 'Design RAG systems for multi‑tenant environments with strong isolation, governance, and observability without sacrificing performance.',
  keywords: 'RAG, multi-tenant, security, isolation, governance, observability, embeddings, vector DB'
};

export default function SecureMultiTenantRAG2025() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors">
              <span className="mr-2">←</span>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Secure Multi‑Tenant RAG in 2025: Architectures and Controls</h1>
            <div className="flex flex-wrap items-center text-indigo-200 text-sm space-x-6">
              <div>📝 Blog</div>
              <div>⏱️ 20 min read</div>
              <div>🏷️ RAG</div>
              <div>Sep 12, 2025</div>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Multi‑tenant Retrieval‑Augmented Generation introduces unique risks: cross‑tenant leakage, noisy‑neighbor latency, and policy drift. This guide provides a practical blueprint to isolate tenants while keeping performance and developer velocity high.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Isolation Models</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Logical isolation: per‑tenant collections, embeddings namespaces, and scoped API keys</li>
            <li>Physical isolation: shard per region/tenant tiers with placement constraints</li>
            <li>Cryptographic isolation: client‑side encryption with searchable encryption strategies</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Governance & Policy</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Policy‑as‑code on ingestion: schemas, PII tagging, consent checks</li>
            <li>Query‑time guards: allow/deny filters, redaction, tenancy scopes enforced in middleware</li>
            <li>Audit trails: immutable logs with retrieval artifacts and prompt templates</li>
          </ol>

          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Performance Controls</h3>
            <p className="text-gray-700">SLO‑aware routing with per‑tenant budgets, cache segmentation, and adaptive top‑k to prevent noisy‑neighbor effects.</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Observability</h2>
          <p className="text-gray-700 mb-6">Trace retrieval spans with tenant IDs, policy versions, and evaluation scores. Watch for cross‑tenant anomalies and access denials.</p>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need help securing multi‑tenant RAG?</h3>
            <p className="text-gray-700 mb-6">We implement secure, compliant RAG platforms with isolation, policy‑as‑code, and deep observability.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-center">Talk to Us</Link>
              <Link href="/blog/ai-2025-data-quality-rag" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center">Read Data Quality for RAG</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

