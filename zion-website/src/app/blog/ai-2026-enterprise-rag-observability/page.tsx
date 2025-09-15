export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI 2026: Enterprise RAG Observability</h1>
        <p className="text-gray-600 mb-8">Traces, evals, and safety telemetry to operate RAG with confidence.</p>
        <div className="prose prose-lg max-w-none">
          <p>
            Enterprise RAG requires deep, step‑level telemetry: retrieval coverage, freshness, drift, and grounding quality.
            This guide outlines a production observability model with spans for each stage and SLIs wired to alerts.
          </p>
          <h2>Telemetry Essentials</h2>
          <ul>
            <li>Source coverage and freshness per query</li>
            <li>Embedding and index drift tracking</li>
            <li>Groundedness and factuality evals</li>
            <li>Latency budgets with p95/p99 alerts</li>
          </ul>
          <h2>Dashboards</h2>
          <p>Create role‑based dashboards for product, SRE, and governance with drill‑downs to incidents.</p>
        </div>
      </article>
    </div>
  )
}

