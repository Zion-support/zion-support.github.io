import React from 'react'

export const metadata = {
  title: 'Guide: Production RAG Latency Budgets (2026)',
  description: 'A pragmatic framework to set and enforce latency budgets for production RAG systems.',
}

export default function ProductionRagLatencyBudgets2026() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Guide: Production RAG Latency Budgets (2026)</h1>
          <p className="text-gray-600 mb-8">A pragmatic framework to set and enforce latency budgets for production RAG systems.</p>
          <div className="prose prose-gray max-w-none">
            <h2>Why Latency Budgets Matter</h2>
            <p>Latency budgets align user experience, cost, and architecture constraints. This guide outlines practical steps to define and enforce these budgets in live systems.</p>
            <h3>Key Components</h3>
            <ul>
              <li>End-to-end service-level objectives (SLOs) for retrieval and generation</li>
              <li>Routing policies with graceful degradation and fallback tiers</li>
              <li>Real-time observability and budget enforcement hooks</li>
            </ul>
            <h3>Getting Started</h3>
            <ol>
              <li>Define SLOs for p50/p95 end-to-end latency</li>
              <li>Instrument retrieval and generation spans with trace-based budgets</li>
              <li>Enable routing fallbacks when budgets are exceeded</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}
